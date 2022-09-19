import type { PredicateCombiner } from '../types'

/**
 * Combines multiples unary-predicates _(with the same argument-type)_ into a
 * single unary-predicate that returns true if _**ONLY ONE**_  of them returns true.
 *
 * @example
 * ```typescript
 * // Either positive or even, but not both.
 * const isEitherPositiveOrEven = onlyOne(isPositive, isEven)
 * isEitherPositiveOrEven(1)  // true,  only positive
 * isEitherPositiveOrEven(2)  // false, both positive & even
 * isEitherPositiveOrEven(-3) // false, neither
 * ```
 * @param predicates The unary-predicates to combine.
 * @returns The combined unary-predicate.
 */
export const onlyOne: PredicateCombiner =
    (...predicates) =>
    (input) => {
        let hasTrue = false
        for (const f of predicates) {
            if (!f(input)) continue
            if (hasTrue) return false
            hasTrue = true
        }
        return hasTrue
    }
