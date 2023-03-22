import {UPPER_LETTERS, NUMS, SPECIFIC_SYMBOLS, LOWER_LETTERS} from "./const";

const allSymbols = [UPPER_LETTERS, LOWER_LETTERS, SPECIFIC_SYMBOLS, NUMS];

const getRandomNumber = (max) => Math.round(Math.random() * max) - 1;

const getRandomElementArray = (array) => array[getRandomNumber(array.length)];

const getPassword = (lengthPassword, parametersPassword) => {
    let count = 0;
    let password = '';

    while (count !== lengthPassword) {
        let randomNum = getRandomNumber(parametersPassword.length);
        if (parametersPassword[randomNum]) {
            let char = getRandomElementArray(allSymbols[randomNum]);
            count++;
            password += char;
        }
    }
    return password
}

export {getPassword};
