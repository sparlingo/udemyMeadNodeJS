const calculateTip = (total, tipPercent = .25) => total + (total * tipPercent)

const fToC = (temp) => {
    return (temp - 32) / 1.8
}

const cToF = (temp) => {
    return (temp * 1.8) + 32
}

module.exports = {
    calculateTip,
    fToC,
    cToF
}