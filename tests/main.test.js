describe('Main JS Logic', () => {
    let linkAction;

    beforeAll(() => {
        // Setup initial DOM structure for main.js execution
        // We need to provide all elements that main.js queries immediately
        document.body.innerHTML = `
            <div id="nav-menu"></div>
            <div id="nav-toggle"></div>
            <div id="nav-close"></div>
            <div id="header"></div>
            <div id="scroll-up"></div>
            <button id="theme-button"></button>
            <div class="nav__link"></div>
            <div class="skills__header"></div>
            <div class="swiper"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
            <section id="home"></section>
        `;

        // Mock Swiper
        global.Swiper = jest.fn();

        // Load the module
        // We require it here so it runs after the DOM is ready
        const main = require('../assets/js/main.js');
        linkAction = main.linkAction;
    });

    beforeEach(() => {
        // Reset nav-menu class list before each test
        const navMenu = document.getElementById('nav-menu');
        navMenu.className = '';
    });

    test('linkAction removes show-menu class from nav-menu', () => {
        // Setup
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.add('show-menu');

        // Verify initial state
        expect(navMenu.classList.contains('show-menu')).toBe(true);

        // Act
        linkAction();

        // Assert
        expect(navMenu.classList.contains('show-menu')).toBe(false);
    });

    test('linkAction does nothing if show-menu class is not present', () => {
         // Setup
         const navMenu = document.getElementById('nav-menu');
         // Ensure it's clean (handled by beforeEach, but good to be explicit)
         expect(navMenu.classList.contains('show-menu')).toBe(false);

         // Act
         linkAction();

         // Assert
         expect(navMenu.classList.contains('show-menu')).toBe(false);
    });
});
