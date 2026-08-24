/*
 * OTHMERE
 * Global site interactions
 */

document.addEventListener("DOMContentLoaded", () => {

    /*
     * Adds a subtle class once the page has loaded.
     * This gives us a clean foundation for future transitions
     * without making the site dependent on JavaScript.
     */

    document.body.classList.add("is-loaded");


    /*
     * External links
     *
     * Any link marked with data-external will open in a new tab.
     */

    document.querySelectorAll("[data-external]").forEach((link) => {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
    });

});
