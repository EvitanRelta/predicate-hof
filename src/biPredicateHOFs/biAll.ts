import type { BiPredicateCombiner } from '../types'

/**
 * Combines multiples binary-predicates _(with the same argument-type)_ into a
 * single binary-predicate that returns true only if _**ALL**_ of them returns
 * true.
 *
 * @param predicates The binary-predicates to combine.
 * @returns The combined binary-predicate.
 */
export const biAll: BiPredicateCombiner =
    (...predicates) =>
    (input1, input2) =>
        predicates.every((f) => f(input1, input2))
