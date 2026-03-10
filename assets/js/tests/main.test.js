/**
 * @jest-environment jsdom
 */

describe('toggleSkills', () => {
    let toggleSkills;

    beforeEach(() => {
        // Reset DOM
        document.body.innerHTML = `
            <div id="nav-menu"></div>
            <div id="nav-toggle"></div>
            <div id="nav-close"></div>
            <header id="header"></header>
            <div id="theme-button"></div>
            <div id="scroll-up"></div>

            <div class="skills__content skills__close">
                <div class="skills__header">Header 1</div>
            </div>
            <div class="skills__content skills__close">
                <div class="skills__header">Header 2</div>
            </div>

            <div class="swiper"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
        `;

        // Mock global objects
        window.Swiper = jest.fn();

        // Mock localStorage
        const localStorageMock = (function() {
            let store = {};
            return {
                getItem: function(key) {
                    return store[key] || null;
                },
                setItem: function(key, value) {
                    store[key] = value.toString();
                },
                clear: function() {
                    store = {};
                },
                removeItem: function(key) {
                    delete store[key];
                }
            };
        })();
        Object.defineProperty(window, 'localStorage', { value: localStorageMock });

        // Reset modules to reload main.js
        jest.resetModules();
        const main = require('../main.js');
        toggleSkills = main.toggleSkills;
    });

    test('opens a closed skills section', () => {
        const headers = document.querySelectorAll('.skills__header');
        const contents = document.getElementsByClassName('skills__content');

        const headerToClick = headers[0];
        const contentToOpen = contents[0];

        // Ensure initial state
        expect(contentToOpen.className).toBe('skills__content skills__close');

        // Call toggleSkills with the header as context
        toggleSkills.call(headerToClick);

        expect(contentToOpen.className).toBe('skills__content skills__open');
    });

    test('closes an open skills section', () => {
        const headers = document.querySelectorAll('.skills__header');
        const contents = document.getElementsByClassName('skills__content');

        const headerToClick = headers[0];
        const contentToClose = contents[0];

        // Set initial state to open
        contentToClose.className = 'skills__content skills__open';

        // Call toggleSkills
        toggleSkills.call(headerToClick);

        expect(contentToClose.className).toBe('skills__content skills__close');
    });

    test('closes other sections when opening one', () => {
        const headers = document.querySelectorAll('.skills__header');
        const contents = document.getElementsByClassName('skills__content');

        const header1 = headers[0];
        const content1 = contents[0];
        const header2 = headers[1];
        const content2 = contents[1];

        // Open first one
        content1.className = 'skills__content skills__open';
        content2.className = 'skills__content skills__close';

        // Click second one
        toggleSkills.call(header2);

        expect(content1.className).toBe('skills__content skills__close');
        expect(content2.className).toBe('skills__content skills__open');
    });
});
