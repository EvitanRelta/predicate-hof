import type { PredicateCombiner } from '../types'
import { any } from './any'
import { not } from './not'

/**
 * Combines multiples unary-predicates _(with the same argument-type)_ into a
 * single unary-predicate that returns true only if _**NONE**_  of them returns true.
 *
 * @example
 * ```typescript
 * const isNotPositiveNorEven = none(isPositive, isEven)
 * isNotPositiveNorEven(-3) // true,  neither
 * isNotPositiveNorEven(1)  // false, positive
 * isNotPositiveNorEven(-2) // false, even
 * ```
 * @param predicates The unary-predicates to combine.
 * @returns The combined unary-predicate.
 */
export const none: PredicateCombiner = (...predicates) => not(any(...predicates))
