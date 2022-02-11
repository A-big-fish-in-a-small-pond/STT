function powerSpectrum(absData) {
    let power = [];
    for (let i = 0; i < absData.length; i++) {
        power[i] = absData[i] * absData[i];
        power[i] = power[i] / absData.length;
    }
    return power;
}

module.exports.powerSpectrum = powerSpectrum;
