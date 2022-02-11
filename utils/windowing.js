/*
Windowing이란 각각의 프레임에 특정 함수를 적용해 경계를 스무딩하는 기법입니다. 대표적으로 해밍 윈도우(Hamming Window)라는 함수가 있습니다. 
*/

const { cos, pi } = require("mathjs");

//  input :
// output :
// formular : w[n] = 0.54 - 0.46 * cos(2pi*n/(N-1))
function windowing(framedata) {
    let hammingwindow = [];
    for (let n = 0; n < framedata.length; n++) {
        // console.log(framedata);
        //console.log(framedata[n] * (0.54 - 0.46 * cos((2 * pi * n) / (framedata.length - 1))));
        hammingwindow[n] = framedata[n] * (0.54 - 0.46 * cos((2 * pi * n) / (framedata.length - 1)));
    }
    return hammingwindow;
}

module.exports.windowing = windowing;
