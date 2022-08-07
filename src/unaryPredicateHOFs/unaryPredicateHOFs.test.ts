import { all, any, none, not, onlyOne } from '.'

const isEven = (n: number) => n % 2 === 0
const isMultipleOf2 = isEven
const isMultipleOf3 = (n: number) => n % 3 === 0
const isMultipleOf5 = (n: number) => n % 5 === 0

test('Unary - not', () => {
    const isOdd = not(isEven)
    expect(isOdd(2)).toBe(false)
    expect(isOdd(10)).toBe(false)
    expect(isOdd(3)).toBe(true)
    expect(isOdd(5)).toBe(true)
})

test('Unary - all', () => {
    const isMultipleOf2_3_5 = all(isMultipleOf2, isMultipleOf3, isMultipleOf5)
    expect(isMultipleOf2_3_5(2 * 3 * 5)).toBe(true)
    expect(isMultipleOf2_3_5(2 * 3)).toBe(false)
    expect(isMultipleOf2_3_5(2)).toBe(false)
    expect(isMultipleOf2_3_5(7)).toBe(false)
})

test('Unary - any', () => {
    const isEitherMultipleOf2_3_5 = any(isMultipleOf2, isMultipleOf3, isMultipleOf5)
    expect(isEitherMultipleOf2_3_5(2 * 3 * 5)).toBe(true)
    expect(isEitherMultipleOf2_3_5(2 * 3)).toBe(true)
    expect(isEitherMultipleOf2_3_5(2)).toBe(true)
    expect(isEitherMultipleOf2_3_5(7)).toBe(false)
})

test('Unary - none', () => {
    const isNotMultipleOf2_3_5 = none(isMultipleOf2, isMultipleOf3, isMultipleOf5)
    expect(isNotMultipleOf2_3_5(2 * 3 * 5)).toBe(false)
    expect(isNotMultipleOf2_3_5(2 * 3)).toBe(false)
    expect(isNotMultipleOf2_3_5(2)).toBe(false)
    expect(isNotMultipleOf2_3_5(7)).toBe(true)
})

test('Unary - onlyOne', () => {
    const isOnlyEitherMultipleOf2_3_5 = onlyOne(isMultipleOf2, isMultipleOf3, isMultipleOf5)
    expect(isOnlyEitherMultipleOf2_3_5(2 * 3 * 5)).toBe(false)
    expect(isOnlyEitherMultipleOf2_3_5(2 * 3)).toBe(false)
    expect(isOnlyEitherMultipleOf2_3_5(2)).toBe(true)
    expect(isOnlyEitherMultipleOf2_3_5(3)).toBe(true)
    expect(isOnlyEitherMultipleOf2_3_5(7)).toBe(false)
})
