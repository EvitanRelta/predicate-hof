import type { PredicateOperator } from '../types'

/**
 * Transforms a predicate to another predicate with negated return value.
 *
 * @example
 * ```typescript
 * const isOdd = not(isEven)
 * isOdd(x) === !isEven(x) // true
 * ```
 * @param predicate The predicate.
 * @returns A predicate that returns the negated result of `predicate`.
 */
export const not: PredicateOperator =
    (predicate) =>
    (...inputs) =>
        !predicate(...inputs)
