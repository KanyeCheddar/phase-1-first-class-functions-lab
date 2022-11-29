// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
    return array.slice(0,2);
}

const returnLastTwoDrivers = function (array) {
    return array.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function (multiplier) {
        return fare*multiplier;
    }
}

const fareDoubler = function (createFareMultiplier) {
    return (createFareMultiplier*2);
}

//const fareDoubler = createFareMultiplier(2);

const fareTripler = function (createFareMultiplier) {
    return (createFareMultiplier*3);
}

//const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(selectingDrivers, arrayOfDrivers) {
    if(arrayOfDrivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(selectingDrivers);
    } else if (arrayOfDrivers === returnLastTwoDrivers) {
        return returnLastTwoDrivers(selectingDrivers);
    }
}

/*
Simplified update to your solution using Flatiron School concept
function selectDifferentDrivers(selectingDrivers, arrayOfDrivers) {
    return arrayOfDrivers(selectingDrivers)
}
*/

/*
Flatiron School Solution
    const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
};
*/