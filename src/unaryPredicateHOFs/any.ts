import type { PredicateCombiner } from '../types'

/**
 * Combines multiples unary-predicates _(with the same argument-type)_ into a
 * single unary-predicate that returns true if _**ANY**_  of them returns true.
 *
 * @param predicates The unary-predicates to combine.
 * @returns The combined unary-predicate.
 */
export const any: PredicateCombiner =
    (...predicates) =>
    (input) =>
        predicates.some((f) => f(input))
