// ==UserScript==
// @name         Galaxy
// @version      1.0.2
// @description  A new cheat to make Tanki Online more fun!
// @author       You
// @match        https://*.tankionline.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tankionline.com
// @grant        GM_xmlhttpRequest
// @connect      galaxytanki.pages.dev
// @connect      *.galaxytanki.pages.dev
// @connect      discord.com
// @require      https://galaxytanki.pages.dev/release/galaxy.js
// ==/UserScript==

GM_xmlhttpRequest({
    method: "GET",
    url: "https://galaxytanki.pages.dev/release/galaxy.js?v=" + Date.now(),
    nocache: true,
    onload: (ev) => {
        if (ev.status === 200) {
            try {
                eval(ev.responseText);
            } catch (error) {
                // Handle execution error silently
            }
        }
    },
    onerror: () => {
        // Handle request error silently
    }
});
