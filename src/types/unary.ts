/**
 * A function that takes in 1 argument _(ie. unary)_ of type `T`, and returns a
 * boolean.
 *
 * @template T Parameter type.
 */
export type Predicate<T> = (x: T) => boolean

/**
 * A Higher-Order-Function that combines multiple unary-predicates _(with the
 * same parameter-types)_, and returns a unary-predicate with the same
 * parameter-type _(ie. type `T`)_.
 *
 * @template T Parameter type of the predicates.
 * @param predicates The unary-predicates to combine.
 * @returns A unary-predicate, with the same parameter-type as those in `predicates`.
 */
export type PredicateCombiner = <T>(...predicates: Predicate<T>[]) => Predicate<T>

/**
 * A Higher-Order-Function that takes in a unary-predicate, and returns a
 * unary-predicate with the same parameter-type _(ie. type `T`)_.
 *
 * @template T - Parameter type of the predicate.
 * @param predicate A unary-predicate.
 * @returns A unary-predicate, with the same parameter-type as `predicate`.
 */
export type PredicateOperator = <T>(predicate: Predicate<T>) => Predicate<T>
