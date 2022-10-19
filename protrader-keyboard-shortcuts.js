// ==UserScript==
// @name         Protrader Keyboard Shortcuts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://web.protrader.com.au/*
// @icon         https://web.protrader.com.au/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function doc_keyUp(e) {
        /*
     Scan result
     */
        // forwards
        if (e.ctrlKey && e.key === 'ArrowRight') {
            document.getElementsByClassName("btn-default")[51].click();
        }
        // backwards
        if (e.ctrlKey && e.key === 'ArrowLeft') {
            document.getElementsByClassName("btn-default")[50].click();
        }

        /*
     Watchlist
     */
        // forwards
        if (e.altKey && e.key === 'ArrowRight') {
            document.getElementsByClassName("btn-default")[57].click();
        }
        // backwards
        if (e.altKey && e.key === 'ArrowRight') {
            document.getElementsByClassName("btn-default")[56].click();
        }
        // add
        if (e.altKey && e.key === 'a') {
            document.getElementsByClassName("btn-default")[58].click();
        }
        // remove
        if (e.altKey && e.key === 'r') {
            document.getElementsByClassName("btn-default")[59].click();
        }

        /*
     Date
     */
        // forwards
        if (e.shiftKey && e.key === 'ArrowRight') {
            document.getElementsByClassName("btn-default")[45].click();
        }
        // backwards
        if (e.shiftKey && e.key === 'ArrowRight') {
            document.getElementsByClassName("btn-default")[44].click();
        }
    }
    document.addEventListener('keyup', doc_keyUp, false);
})();