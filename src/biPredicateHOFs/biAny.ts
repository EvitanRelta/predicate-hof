import type { BiPredicateCombiner } from '../types'

/**
 * Combines multiples binary-predicates _(with the same argument-types)_ into a
 * single binary-predicate that returns true if _**ANY**_  of them returns true.
 *
 * @param predicates The binary-predicates to combine.
 * @returns The combined binary-predicate.
 */
export const biAny: BiPredicateCombiner =
    (...predicates) =>
    (input1, input2) =>
        predicates.some((f) => f(input1, input2))
