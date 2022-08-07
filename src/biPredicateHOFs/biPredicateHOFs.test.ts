import { biAll, biAny, biNone, biNot, biOnlyOne } from '.'

const isEqual = (a: number, b: number) => a === b
const isBothPositive = (a: number, b: number) => a > 0 && b > 0
const isBothNot1 = (a: number, b: number) => a !== 1 && b !== 1

test('Binary - biNot', () => {
    const isNotEqual = biNot(isEqual)
    expect(isNotEqual(1, 1)).toBe(false)
    expect(isNotEqual(100, 100)).toBe(false)
    expect(isNotEqual(1, 100)).toBe(true)
    expect(isNotEqual(100, 1)).toBe(true)
})

test('Binary - biAll', () => {
    const combined = biAll(isEqual, isBothPositive, isBothNot1)
    expect(combined(2, 2)).toBe(true)
    expect(combined(1, 1)).toBe(false)
    expect(combined(-2, -2)).toBe(false)
    expect(combined(2, 3)).toBe(false)
})

test('Binary - biAny', () => {
    const combined = biAny(isEqual, isBothPositive, isBothNot1)
    expect(combined(2, 2)).toBe(true)
    expect(combined(1, 1)).toBe(true)
    expect(combined(-2, -2)).toBe(true)
    expect(combined(-2, 1)).toBe(false)
})

test('Binary - biNone', () => {
    const combined = biNone(isEqual, isBothPositive, isBothNot1)
    expect(combined(2, 2)).toBe(false)
    expect(combined(1, 1)).toBe(false)
    expect(combined(-2, -2)).toBe(false)
    expect(combined(-2, 1)).toBe(true)
})

test('Binary - biOnlyOne', () => {
    const combined = biOnlyOne(isEqual, isBothPositive, isBothNot1)
    expect(combined(2, 2)).toBe(false)
    expect(combined(1, 1)).toBe(false)
    expect(combined(1, 3)).toBe(true)
    expect(combined(-1, 3)).toBe(true)
    expect(combined(-2, 1)).toBe(false)
})
