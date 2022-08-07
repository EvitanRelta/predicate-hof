import type { BiPredicateCombiner } from '../types'
import { biAny } from './biAny'
import { biNot } from './biNot'

/**
 * Combines multiples binary-predicates _(with the same argument-type)_ into a
 * single binary-predicate that returns true only if _**NONE**_  of them
 * returns true.
 *
 * @param predicates The binary-predicates to combine.
 * @returns The combined binary-predicate.
 */
export const biNone: BiPredicateCombiner = (...predicates) => biNot(biAny(...predicates))
