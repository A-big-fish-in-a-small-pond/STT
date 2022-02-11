function complexSplit(complexNum) {
    let real = complexNum.re.toString();

    if (real.includes("e")) {
        real = Number(real.split("e")[0]) * 2.72 + Number(real.split("e")[1]);
    } else {
        real = Number(real);
    }

    let im = complexNum.im.toString();

    if (im.includes("e")) {
        im = Number(im.split("e")[0]) * 2.72 + Number(im.split("e")[1]);
    } else {
        im = Number(im);
    }
    return [real, im];
    // console.log(complexNum.re + " " + complexNum.im);
}

module.exports = complexSplit;
