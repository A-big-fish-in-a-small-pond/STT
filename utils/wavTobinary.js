var load = require("audio-loader");

function wavTobinary(filename) {
    return new Promise((resolve) => {
        load(filename).then(function (buffer) {
            const channelData = buffer.getChannelData(0);
            console.log(filename);
            resolve(channelData);
        });
    });
}

module.exports = wavTobinary;
