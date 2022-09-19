import type { PredicateCombiner } from '../types'

/**
 * Combines multiples unary-predicates _(with the same argument-type)_ into a
 * single unary-predicate that returns true if _**ANY**_  of them returns true.
 *
 * @example
 * ```typescript
 * const isPositiveOrEven = any(isPositive, isEven)
 * isPositiveOrEven(1)  // true,  positive
 * isPositiveOrEven(-2) // true,  even
 * isPositiveOrEven(-3) // false, neither
 * ```
 * @param predicates The unary-predicates to combine.
 * @returns The combined unary-predicate.
 */
export const any: PredicateCombiner =
    (...predicates) =>
    (...inputs) =>
        predicates.some((f) => f(...inputs))
