/**
 * A function that takes in 2 arguments _(ie. binary)_ of type `T` & `U`, and
 * returns a boolean.
 *
 * @template T 1st-parameter type.
 * @template U 2nd-parameter type.
 */
export type BiPredicate<T, U> = (x: T, y: U) => boolean

/**
 * A Higher-Order-Function that combines multiple binary-predicates _(with the
 * same parameter-types)_, and returns a binary-predicate with the same
 * parameter-types _(ie. type `T` & `U`)_.
 *
 * @template T 1st-parameter type of the predicates.
 * @template U 2nd-parameter type of the predicates.
 * @param predicates The binary-predicates to combine.
 * @returns A binary-predicate, with the same parameter-type as those in `predicates`.
 */
export type BiPredicateCombiner = <T, U>(...predicates: BiPredicate<T, U>[]) => BiPredicate<T, U>

/**
 * A Higher-Order-Function that takes in a binary-predicate, and returns a
 * binary-predicate with the same parameter-types _(ie. type `T` & `U`)_.
 *
 * @template T - 1st-parameter type of the predicate.
 * @template U - 2nd-parameter type of the predicate.
 * @param predicate A binary-predicate.
 * @returns A binary-predicate, with the same parameter-type as `predicate`.
 */
export type BiPredicateOperator = <T, U>(predicate: BiPredicate<T, U>) => BiPredicate<T, U>
