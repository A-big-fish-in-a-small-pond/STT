/*
이에 음성 신호가 stationary하다고 가정해도 좋을 만큼 원시 음성 신호를 아주 짧은 시간 단위(대개 25ms)로 잘게 쪼갭니다.
*/

function framing(data, frame_size, frame_stride) {
    let resultData = [];
    let k = 0;
    let i = 0;
    while (data.length > k) {
        resultData[i] = [];
        for (let j = 0; j < frame_size; j++) {
            if (data[k + j] == undefined) {
                resultData[i].push(0);
            } else {
                resultData[i].push(data[k + j]);
            }
        }
        resultData.push(data[i]);

        k = k + frame_size - frame_stride;
        i++;
    }
    return resultData;
}

module.exports.framing = framing;
