import type { PredicateCombiner } from '../types'

/**
 * Combines multiples predicates _(with the same parameter-type(s))_ into a
 * single predicate that returns true only if _**ALL**_ of them returns true.
 *
 * @example
 * ```typescript
 * const isPositiveEven = all(isPositive, isEven)
 * isPositiveEven(2)  // true,  both positive & even
 * isPositiveEven(1)  // false, only positive
 * isPositiveEven(-2) // false, only even
 * ```
 * @param predicates The predicates to combine.
 * @returns The combined predicate.
 */
export const all: PredicateCombiner =
    (...predicates) =>
    (...inputs) =>
        predicates.every((f) => f(...inputs))
