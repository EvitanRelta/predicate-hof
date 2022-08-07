import type { BiPredicateOperator } from '../types'

/**
 * Transforms a binary-predicate to another binary-predicate with negated
 * return value.
 *
 * @param predicate The binary-predicate.
 * @returns A binary-predicate that returns the negated result of `predicate`.
 */
export const biNot: BiPredicateOperator = (predicate) => (input1, input2) =>
    !predicate(input1, input2)
