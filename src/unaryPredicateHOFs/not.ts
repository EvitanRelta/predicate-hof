import type { PredicateOperator } from '../types'

/**
 * Transforms a unary-predicate to another unary-predicate with negated return
 * value.
 *
 * @param predicate The unary-predicate.
 * @returns A unary-predicate that returns the negated result of `predicate`.
 */
export const not: PredicateOperator = (predicate) => (input) => !predicate(input)
