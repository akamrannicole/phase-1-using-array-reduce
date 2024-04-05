const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// reducer.js

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const totalBatteries = batteryBatches.reduce(reducer, 0);

module.exports = totalBatteries;

