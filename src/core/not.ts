import type { PredicateOperator } from '../types'

/**
 * Transforms a unary-predicate to another unary-predicate with negated return
 * value.
 *
 * @example
 * ```typescript
 * const isOdd = not(isEven)
 * isOdd(x) === !isEven(x) // true
 * ```
 * @param predicate The unary-predicate.
 * @returns A unary-predicate that returns the negated result of `predicate`.
 */
export const not: PredicateOperator =
    (predicate) =>
    (...inputs) =>
        !predicate(...inputs)
