/**
 * A function that takes in a varied number of arguments _(where the `args`
 * arguments-array is of type `T`)_, and returns a boolean.
 *
 * @template T Arguments-array type.
 */
export type Predicate<T extends any[]> = (...args: T) => boolean

/**
 * A Higher-Order-Function that combines multiple predicates _(with the same
 * parameter-type(s))_, and returns a predicate with the same parameter-type(s)
 * _(ie. type `T`)_.
 *
 * @template T Arguments-array type of the predicates.
 * @param predicates The predicates to combine.
 * @returns A predicate, with the same parameter-type(s) as those in `predicates`.
 */
export type PredicateCombiner = <T extends any[]>(...predicates: Predicate<T>[]) => Predicate<T>

/**
 * A Higher-Order-Function that takes in a predicate, and returns a predicate
 * with the same parameter-type(s) _(ie. type `T`)_.
 *
 * @template T - Arguments-array type of the predicate.
 * @param predicate A predicate.
 * @returns A predicate, with the same parameter-type(s) as `predicate`.
 */
export type PredicateOperator = <T extends any[]>(predicate: Predicate<T>) => Predicate<T>
