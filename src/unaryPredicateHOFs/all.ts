import type { PredicateCombiner } from '../types'

/**
 * Combines multiples unary-predicates _(with the same argument-type)_ into a
 * single unary-predicate that returns true only if _**ALL**_ of them returns true.
 *
 * @param predicates The unary-predicates to combine.
 * @returns The combined unary-predicate.
 */
export const all: PredicateCombiner =
    (...predicates) =>
    (input) =>
        predicates.every((f) => f(input))
