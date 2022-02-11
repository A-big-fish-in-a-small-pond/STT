let testaudio = "./audio/gooddaywav.wav";

let math = require("mathjs");

var wavTobinary = require("./utils/wavTobinary");
let fs = require("fs");
const { sqrt, atan2, im, complexDependencies } = require("mathjs");
async function DFT() {
    let channelData = await wavTobinary(testaudio);

    console.log(channelData.length);
    let resultData = [];
    let file = fs.createWriteStream("./result/result.txt");

    // for (let k = 0; k < channelData.length; k++) {
    //     resultData[k] = 0;
    //     for (let n = 0; n < channelData.length; n++) {
    //         resultData[k] = math.evaluate(`${resultData[k]} + ${channelData[k]} * e^((-2 * i * pi * ${k} * ${n}) / ${channelData.length})`);
    //     }
    //     file.write(resultData[k] + "\n");
    // }

    let complexData = [];

    for (let k = 10000; k < 10500; k++) {
        resultData[k] = 0;
        complexData[k] = [];
        for (let n = 10000; n < 10500; n++) {
            resultData[k] = math.evaluate(`${resultData[k]} + ${channelData[k]} * e^((-2 * i * pi * ${k} * ${n}) / ${500})`);
        }

        let [real, im] = complexSplit(resultData[k]);
        complexData[k] = [real, im];
        complexData[k].push(amplitude(real, im));
        complexData[k].push(phase(real, im));
        file.write(real + "\t" + im + "\n");
    }

    //complexData = DFT Output, real, im, amplitude, phase
    let amplitudeData = [];
    for (let k = 10000; k < 10500; k++) {
        amplitudeData.push(complexData[k][3]);
    }

    //console.log(amplitudeData);
    let signaldect = [];
    signaldect = signalDetection(amplitudeData);

    console.log(signaldect);
    console.log("signaldect.length : " + signaldect.length);
    // file.end(() => {
    //     for (let i = 0; i < resultData.length; i++) {
    //         let [a, b] = complexSplit(resultData[i]);
    //         // console.log(a, b);
    //     }
    // });

    console.log("end");
}

function complexSplit(input) {
    let real = input.re.toString();

    if (real.includes("e")) {
        real = Number(real.split("e")[0]) * 2.72 + Number(real.split("e")[1]);
    } else {
        real = Number(real);
    }

    let im = input.im.toString();

    if (im.includes("e")) {
        im = Number(im.split("e")[0]) * 2.72 + Number(im.split("e")[1]);
    } else {
        im = Number(im);
    }

    return [real, im];

    // console.log(input.re + " " + input.im);
}

function amplitude(real, imaginary) {
    let real2 = real * real;
    let imaginary2 = imaginary * imaginary;
    return sqrt(real2 + imaginary2);
}

function phase(real, imaginary) {
    return atan2(real, imaginary);
}

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

DFT();
