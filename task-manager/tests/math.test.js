const { calculateTip, fToC, cToF } = require('../src/math')

test('should calculate total with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)
})

test('should calculate with default tip', () => {
    const total = calculateTip(20)
    expect(total).toBe(25)
})

test('should convert celsius to fehrenheit', () => {
    const temp = cToF(0)
    expect(temp).toBe(32)
})

test('should convert fehrenheit to celsius', () => {
    const temp = fToC(32)
    expect(temp).toBe(0)
})