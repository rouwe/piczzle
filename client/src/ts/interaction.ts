export function setHeaderActiveLink() {
    /**
     * Sets the header navigation link to active base on current page
     */
    const currentPagePath = window.location.pathname;
    const headerPageMap = ["/", "/contact", "/about"];
    const authPageMap = ["/auth/login", "/auth/signup"];
    const headerActionElement = document.querySelector('.header__action') as HTMLElement;

    const otherInactiveLink = headerActionElement.querySelectorAll(
        `a.header__action__nav-wrapper__item__link`
    ) as NodeListOf<HTMLAnchorElement>;
    const otherInactiveCtaRoute = headerActionElement.querySelectorAll(`a.cta-route`) as NodeListOf<HTMLAnchorElement>;

    if (headerPageMap.includes(currentPagePath)) {
        // Main navigational route
        const currentActive = headerActionElement.querySelector(
            `a[href="${currentPagePath}"].header__action__nav-wrapper__item__link`
        ) as HTMLLinkElement;
        // Remove active class for inactive page
        otherInactiveLink.forEach((link) => {
            link.classList.remove('active-header-link');
        })
        otherInactiveCtaRoute.forEach((route) => {
            route.classList.remove('active-cta-route');
        })
        // Set current page active class
        currentActive.classList.add('active-header-link');
    }else if (authPageMap.includes(currentPagePath)) {
        // Login and Signup route
        const currentActive = headerActionElement.querySelector(
            `a[href="${currentPagePath}"].cta-route`
        ) as HTMLLinkElement;
        // Remove active class for inactive page
        otherInactiveCtaRoute.forEach((route) => {
            route.classList.remove('active-cta-route');
        })
        otherInactiveLink.forEach((link) => {
            link.classList.remove('active-header-link');
        })
        currentActive.classList.add('active-cta-route');
    }
}