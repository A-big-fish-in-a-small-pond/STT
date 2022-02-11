/*
사람의 소리 인식은 1000Hz 이하의 저주파수(low frequency) 영역대가 고주파수(high frequency) 대비 민감하다고 합니다. 이에 주파수 영역대별 에너지 정보가 있는 데이터(pow_frames)에서 저주파수 영역대를 고주파수 영역대 대비 상대적으로 세밀하게 볼 필요가 있습니다. 이때 적용하는 기법을 필터뱅크(Filter Banks)라고 합니다.
*/

const { log10 } = require("mathjs");

function fre2Mel(fre) {
    return 2595 * log10(1 + fre / 700);
}

function mel2Fre(mel) {
    return 700 * (10 ^ (mel / 2595 - 1));
}

function melScaleFilter(fre, mel) {}

module.exports.fre2Mel = fre2Mel;
module.exports.mel2Fre = mel2Fre;
module.exports.melScaleFilter = melScaleFilter;
