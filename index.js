// Code your solution in this file!
const returnFirstTwoDrivers = drivArr => drivArr.slice(0,2)

const returnLastTwoDrivers = drivArr => drivArr.slice(drivArr.length - 2)

const selectingDrivers = [returnFirstTwoDrivers ,returnLastTwoDrivers]

function createFareMultiplier(num){
    return (fare => num * fare)
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, returnFunc){
    return returnFunc(drivers)
}