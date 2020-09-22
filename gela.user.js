// ==UserScript==
// @name         Выгрузка заказов из отчёта на superpuper.ru в корзину на gela.org
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Выгрузить заказы из отчёта
// @author       Larisa Morozhnikova
// @match        https://www.gela.ru/*
// @resource     loaderJs https://static.sp-site.ru/js/library/orders-upload-helpers/loader.js?t=202009222018
// @grant        GM_getResourceText
// ==/UserScript==

(async function() {
    'use strict';

    eval(GM_getResourceText('loaderJs'));
    await vvLoader('https://static.sp-site.ru/js/library/foreachasync/foreachasync.js');
    await vvLoader('https://static.sp-site.ru/js/library/sweetalert2/sweetalert2@10.js');

    const forEachAsync = window.forEachAsync;
    const Swal = window.Swal;


    eval(GM_getResourceText('loaderJs'));
    await vvLoader('https://static.sp-site.ru/js/library/orders-upload-helpers/index.js');
    await vvLoader('https://static.sp-site.ru/js/library/orders-upload-helpers/gela.ru.js');

    addButton();
})();
