function addAllNumber(arrayOfNumbers) {
    arrayOfNumbers.reduce((acc, curr) => acc += curr, 0)

}

addAllNumber([1, 2, 3, 4, 6, 6, 7])
