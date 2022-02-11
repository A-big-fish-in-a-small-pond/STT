//  input  : (x, y)
//  output : (0, 0) (x, y) distance

const { sqrt } = require("mathjs");

function amplitude(real, imaginary) {
    let real2 = real * real;
    let imaginary2 = imaginary * imaginary;
    return sqrt(real2 + imaginary2);
}

module.exports.amplitude = amplitude;
