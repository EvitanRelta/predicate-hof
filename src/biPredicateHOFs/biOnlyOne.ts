import type { BiPredicateCombiner } from '../types'

/**
 * Combines multiples binary-predicates _(with the same argument-types)_ into a
 * single binary-predicate that returns true if _**ONLY ONE**_  of them returns
 * true.
 *
 * @param predicates The binary-predicates to combine.
 * @returns The combined binary-predicate.
 */
export const biOnlyOne: BiPredicateCombiner =
    (...predicates) =>
    (input1, input2) => {
        let hasTrue = false
        for (const f of predicates) {
            if (!f(input1, input2)) continue
            if (hasTrue) return false
            hasTrue = true
        }
        return hasTrue
    }
