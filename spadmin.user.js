// ==UserScript==
// @name         Личный кабинет организатора spadmin.org
// @namespace    https://spadmin.org/
// @version      0.1
// @description  Помощник по каталогам и отчётам для организаторов СП
// @author       Larisa Morozhnikova
// @include      *
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';
    window.inputDomain = window.location.hostname.replace(/^www./, '');
    const loaderUrl = `https://spadmin.org/superpuper.ru/orderUploader/js/-loader.js?domain=${window.inputDomain}&t=${Math.random()}`;
    const req = await fetch(loaderUrl);
    const res = await req.text();
    const loaderScript = document.createElement('script');
    loaderScript.innerText = res;
    document.body.appendChild(loaderScript);
})();
