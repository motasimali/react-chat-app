const { parseDateToISO } = require('../utils')

test('Parse Date to ISO Test', () => {
    const text = parseDateToISO('2012-08-29T21:36:34+0000')
    expect(text).toBe("2012-08-29")
});
