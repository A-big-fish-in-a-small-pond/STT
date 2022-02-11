/*
사람 말소리를 스펙트럼(spectrum)으로 변환해서 관찰하면 일반적으로 저주파(low frequency) 성분의 에너지(energy)가 고주파(high frequency)보다 많은 경향이 있습니다. 이러한 경향은 모음(vowel)에서 자주 확인됩니다. 고주파 성분의 에너지를 조금 올려주면 음성 인식 모델의 성능을 개선할 수 있다고 합니다. 고주파 성분의 에너지를 올려주는 전처리 과정을 preemphasis라고 합니다. preemphasis를 실시하면 다음 세 가지 효과를 볼 수 있다고 합니다.

상대적으로 에너지가 적은 고주파 성분을 강화함으로써 원시 음성 신호가 전체 주파수 영역대에서 비교적 고른 에너지 분포를 갖도록 함.
푸리에 변환시 발생할 수 있는 numerical problem 예방.
Signal-to-Noise Ratio(SNR) 개선.
t 번째 시점의 원시 음성 신호를  xt 라고 할 때 preemphasis는 수식1과 같이 계산합니다(first-order high-pass filter). preemphasis coefficient  α 는 보통 0.95나 0.97을 사용한다고 합니다. 예시 음성에 대한 preemphasis 수행 코드와 결과는 코드3에서 확인할 수 있습니다
*/
// input  : t 번째 원시 음성 신호
// output :
// formular : y(t) = x(t) - ax(t-1)   a = 0.95 or 0.97

const { constA } = require("../const/const");

function preemphasis(signal1, signal2) {
    return signal1 - constA * signal2;
}

module.exports.preemphasis = preemphasis;
