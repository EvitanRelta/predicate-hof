import type { PredicateCombiner } from '../types'
import { any } from './any'
import { not } from './not'

/**
 * Combines multiples predicates _(with the same parameter-type(s))_ into a
 * single predicate that returns true only if _**NONE**_  of them returns true.
 *
 * @example
 * ```typescript
 * const isNotPositiveNorEven = none(isPositive, isEven)
 * isNotPositiveNorEven(-3) // true,  neither
 * isNotPositiveNorEven(1)  // false, positive
 * isNotPositiveNorEven(-2) // false, even
 * ```
 * @param predicates The predicates to combine.
 * @returns The combined predicate.
 */
export const none: PredicateCombiner = (...predicates) => not(any(...predicates))
