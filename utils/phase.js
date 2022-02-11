const { atan2 } = require("mathjs");

function phase(real, imaginary) {
    return atan2(real, imaginary);
}

module.exports = phase;
