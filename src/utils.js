const getRandomElementArray = (array) => {
    return array[getRandomNumber(array.length - 1)]
}

const getRandomNumber = (max) => {
    return Math.round(Math.random() * max)
}

export {getRandomElementArray}
