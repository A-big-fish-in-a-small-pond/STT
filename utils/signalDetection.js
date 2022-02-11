// input  : graph data
// output : signalDetection data

function signalDetection(signalData) {
    let sum = 0;
    for (let i = 0; i < signalData.length; i++) {
        sum = sum + sqrt(signalData[i] * signalData[i]);
    }
    let average;
    average = sum / signalData.length;
    console.log("average : " + average);
    let outputData = [];
    let k = 0;
    for (let i = 0; i < signalData.length; i++) {
        if (average < signalData[i]) {
            if (signalData[i - 1] < signalData[i] && signalData[i] < signalData[i + 1]) outputData.push(i);
        }
    }
    return outputData;
}

module.exports = signalDetection;
