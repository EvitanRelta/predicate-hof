import { all, any, none, not, onlyOne } from '.'

const isEqual = (a: number, b: number) => a === b
const isBothPositive = (a: number, b: number) => a > 0 && b > 0
const isBothNot1 = (a: number, b: number) => a !== 1 && b !== 1

test('Binary - not', () => {
    const isNotEqual = not(isEqual)
    expect(isNotEqual(1, 1)).toBe(false)
    expect(isNotEqual(100, 100)).toBe(false)
    expect(isNotEqual(1, 100)).toBe(true)
    expect(isNotEqual(100, 1)).toBe(true)
})

test('Binary - all', () => {
    const combined = all(isEqual, isBothPositive, isBothNot1)
    expect(combined(2, 2)).toBe(true)
    expect(combined(1, 1)).toBe(false)
    expect(combined(-2, -2)).toBe(false)
    expect(combined(2, 3)).toBe(false)
})

test('Binary - any', () => {
    const combined = any(isEqual, isBothPositive, isBothNot1)
    expect(combined(2, 2)).toBe(true)
    expect(combined(1, 1)).toBe(true)
    expect(combined(-2, -2)).toBe(true)
    expect(combined(-2, 1)).toBe(false)
})

test('Binary - none', () => {
    const combined = none(isEqual, isBothPositive, isBothNot1)
    expect(combined(2, 2)).toBe(false)
    expect(combined(1, 1)).toBe(false)
    expect(combined(-2, -2)).toBe(false)
    expect(combined(-2, 1)).toBe(true)
})

test('Binary - onlyOne', () => {
    const combined = onlyOne(isEqual, isBothPositive, isBothNot1)
    expect(combined(2, 2)).toBe(false)
    expect(combined(1, 1)).toBe(false)
    expect(combined(1, 3)).toBe(true)
    expect(combined(-1, 3)).toBe(true)
    expect(combined(-2, 1)).toBe(false)
})
