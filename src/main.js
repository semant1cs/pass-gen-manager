import {getPassword} from "./utils";

const copy__to__clipboard = document.querySelector('.copy__to__clipboard');
const field__password = document.querySelector('.field__password');
const length_password = document.querySelector('#length_password');
const upper_case = document.querySelector('#upper_case');
const lower_case = document.querySelector('#lower_case');
const specific_symbols = document.querySelector('#specific_symbols');
const numbers = document.querySelector('#numbers');
const generate__password = document.querySelector('#generate__password');




generate__password.addEventListener('click', () => {
    const parametersPassword = [upper_case.checked, lower_case.checked, specific_symbols.checked, numbers.checked];
    const lengthPassword = length_password.value;

    const password = getPassword(10, parametersPassword);


    field__password.innerHTML = password;
})

copy__to__clipboard.addEventListener('click', () => {

})

