const monday = false // DONT
const isTodayMonday = true // DO

const shouldEatBreakfast = false // DO
if (shouldEatBreakfast) {
    console.log('Eggs + Bacon and Juice')
}

const areCohort70StudentsTheBest = true // DO


const calculateMonthlyPayroll = () => {}
const fetchActiveUsers = () => {}
const printLowerCasedNamesFromListA = () => { // DO
    console.log('printing all lower cased names from list A')
}

const print = () => { // DONT
    console.log('printing all lower cased names from list A')
}

const countTotalUsers = () => {} // DO


const users = [] // DONT
const activeUsers = [] // DO
const inactiveUsersWithPendingApproval = [] // DO


const primeNumbers = [2, 3, 5, 7, 11, false, 'Camilo'] //DONT
const primeNumbers2 = [2, 3, 5, 7, 11] //DO

const addTwoPositiveNumbers = (number1, number2) => { // DONT
    const name = 'Camilo'
    return number1 + number2 + name
}


const addTwoPositiveNumbers2 = (number1, number2) => { // DO
    return number1 + number2
}


// camelCase - variables and functions Javascript
const firstName = 'Camilo'
const sumTwoNumbers = () => {}

// PascalCase - Classes and Components
class AutomaticCar {}
const UserProfileCard = () => {}

// snake_case - variables and functions in Python
// first_name = 'Sebastian'
// def sum_two_numbers():

// SCREMAING_SNAKE_CASE - Constants in any programming language
const IS_DEVELOPMENT_ENVIRONMENT = true
const MAX_PDF_SIZE_ALLOWED = '20MB'
