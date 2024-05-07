"use strict";

const body = document.body;
const elHeaderLoginBox = document.querySelector('.header_login-box');
const elHeaderRezult = document.querySelector('.rezult');

elHeaderLoginBox.style.display = 'none';
elHeaderRezult.style.display = 'none';


function HeaderLogin() {
    body.style.cssText = `
        overflow: hidden;
    `

    elHeaderLoginBox.style.cssText = `
        display: inline-block;
    `

    elHeaderRezult.style.cssText = `
        display: inline-block;
    `
}

function HeaderCloseModal() {
    body.style.cssText = `
        flex-direction: column;
    `

    elHeaderLoginBox.style.cssText = `
        display: none;
    `

    elHeaderRezult.style.cssText = `
        display: none;
    `
}