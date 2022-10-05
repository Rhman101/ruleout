import addBasicIntegers from './addBasicIntegers';

test('must return string', () => {
    expect(addBasicIntegers({ range: [1, 2, 3, 4, 5], numberIntegers: 4 }).answer[0]).toMatch(/./)
})

test('must return number greater than 0', () => {
    expect(parseInt(addBasicIntegers({ range: [1, 2, 3, 4, 5], numberIntegers: 4 }).answer[0])).toBeGreaterThan(0);
})

test('must produce correct question and answer', () => {
    let returned = addBasicIntegers({ range: [1, 2, 3, 4, 5,5000,8000], numberIntegers: 5 });
    expect(eval(returned.question[0].text)).toBe(parseInt(returned.answer[0]))
})

test('latex must be false', () => {
    expect(addBasicIntegers({range: [1,10], numberIntegers: 3}).question[0].latex).toBe(false);
})