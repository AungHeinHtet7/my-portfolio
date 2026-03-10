/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

// Mock global Swiper class since it's used in main.js
global.Swiper = class {
  constructor() {}
};

describe('Theme Toggle', () => {
    let scriptContent;

    beforeAll(() => {
        // Read the script content once
        scriptContent = fs.readFileSync(path.resolve(__dirname, '../assets/js/main.js'), 'utf8');
    });

    beforeEach(() => {
        // Reset DOM with all required elements to prevent null reference errors
        document.body.innerHTML = `
            <header id="header"></header>
            <div id="nav-menu">
                <div class="nav__menu">
                    <!-- Example link for scroll spy -->
                    <a href="#home" class="nav__link">Home</a>
                </div>
            </div>
            <div id="nav-toggle"></div>
            <div id="nav-close"></div>

            <section id="home"></section>

            <div class="skills__content">
                <div class="skills__header"></div>
            </div>

            <div class="swiper">
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </div>

            <div id="scroll-up"></div>

            <!-- The theme button we want to test -->
            <button id="theme-button" class="uil uil-moon change-theme"></button>
        `;

        // Mock localStorage
        const localStorageMock = (function() {
            let store = {};
            return {
                getItem: jest.fn(key => store[key] || null),
                setItem: jest.fn((key, value) => {
                    store[key] = value.toString();
                }),
                clear: jest.fn(() => {
                    store = {};
                }),
                removeItem: jest.fn(key => {
                    delete store[key];
                })
            };
        })();

        Object.defineProperty(window, 'localStorage', {
            value: localStorageMock,
            writable: true
        });

        jest.restoreAllMocks();
    });

    test('should toggle theme and save preference to localStorage', () => {
        // Execute the script
        // We use eval here because the script is not a module and relies on global scope/DOM
        // Wrapping in a function scope to avoid global namespace pollution and redeclaration errors
        try {
            (function() {
                eval(scriptContent);
            })();
        } catch (e) {
            // If the error is the expected TypeError from the bug, we can let it bubble up
            // or we can catch it here if we want to assert on it specifically.
            // For now, letting it fail the test is appropriate.
            throw e;
        }

        const themeButton = document.getElementById('theme-button');

        // Spy on localStorage.setItem
        // Note: we already mocked it with jest.fn(), so we can just check calls

        // Simulate click
        themeButton.click();

        // Expectations
        expect(document.body.classList.contains('dark-theme')).toBe(true);
        expect(themeButton.classList.contains('uil-moon')).toBe(true);

        // Verify localStorage.setItem was called correctly
        // The script calls setItem for 'selected-theme' and supposedly for 'selected-icon'
        expect(window.localStorage.setItem).toHaveBeenCalledWith('selected-theme', 'dark');

        // The bug is that it calls localStorage.seti for 'selected-icon'
        // If the code was correct, this expectation would pass:
        expect(window.localStorage.setItem).toHaveBeenCalledWith('selected-icon', 'uil-moon');
    });
});
