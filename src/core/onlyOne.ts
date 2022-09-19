import type { PredicateCombiner } from '../types'

/**
 * Combines multiples predicates _(with the same parameter-type(s))_ into a
 * single predicate that returns true if _**ONLY ONE**_  of them returns true.
 *
 * @example
 * ```typescript
 * // Either positive or even, but not both.
 * const isEitherPositiveOrEven = onlyOne(isPositive, isEven)
 * isEitherPositiveOrEven(1)  // true,  only positive
 * isEitherPositiveOrEven(2)  // false, both positive & even
 * isEitherPositiveOrEven(-3) // false, neither
 * ```
 * @param predicates The predicates to combine.
 * @returns The combined predicate.
 */
export const onlyOne: PredicateCombiner =
    (...predicates) =>
    (...inputs) => {
        let hasTrue = false
        for (const f of predicates) {
            if (!f(...inputs)) continue
            if (hasTrue) return false
            hasTrue = true
        }
        return hasTrue
    }
