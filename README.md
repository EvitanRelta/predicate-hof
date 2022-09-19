# Predicate HOF _<sup><sub>(High-Order-Functions)</sub></sup>_

A collections of higher-order-functions to combine and negate predicates, without evaluating said predicates.

**<ins>Fully written</ins>** in TypeScript, and no dependencies.

Currently, the functions available are:

-   `not`, &nbsp; &nbsp; &hairsp;&hairsp;&hairsp; &nbsp; negates the predicate.
-   `all`, &nbsp; &nbsp; &hairsp;&hairsp;&hairsp; &nbsp; true only if **_ALL_** the predicates returns true.
-   `any`, &nbsp; &nbsp; &hairsp;&hairsp;&hairsp; &nbsp; true if **_ANY_** the predicate returns true.
-   `none`,&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&hairsp;&hairsp;&hairsp;&hairsp; true only if **_NONE_** of the predicates return true.
-   `onlyOne`,&thinsp;&thinsp;&hairsp;&hairsp;&hairsp;true if **_ONLY ONE_** of the predicates return true.

<br>They all work with predicates taking in **<ins>any number</ins>** of arguments, as long as all the predicates take in the same _(or subtype/supertype)_ parameters for example:

```typescript
interface Parent {
    x: number
}
interface Child extends Parent {
    y: string
}

const parentPredicate = (x: Parent) => true
const childPredicate = (x: Child) => true

// Both works:
all(parentPredicate, childPredicate)
all(childPredicate, parentPredicate)
```

> If you're getting type errors, check the [**"Fixing type errors"**](#fixing-type-errors) section below

## <br>Install

```bash
npm i predicate-hof
```

## <br>Examples

I didn't define the predicates below for simplicity-sake, so you can just use your imagination on how they work :)

```typescript
import { all } from 'predicate-hof'

const canBuyAGun = all(isAbove18, hasNoCriminalRecord, hasMoney)
canBuyAGun(bob) // true,  bob is cool
canBuyAGun(brokeAssTimmy) // false, go get a job Timmy
```

```typescript
import { any } from 'predicate-hof'

const toCallCops = any(hasDoneSmthBad, hasStolenMyPurse, isBlack)
toCallCops(bob) // false, bob is still cool
toCallCops(obama) // true,  he didn't do anything wrong but...
```

```typescript
import { not } from 'predicate-hof'

isAlive(bob) // true, always alive in my heart
not(isAlive)(johnFKennedy) // true

wasAssassinated(johnFKennedy) // true, rip Mr President :(
not(wasAssassinated)(epstein) // :^)
```

### <br>Here's examples for binary-predicates

```typescript
import { any } from 'predicate-hof'

isLessThan(1, 3) // true, 1 < 3
isEqual(1, 1) // true, 1 === 1

const isLessThanOrEqual = biAny(isLessThan, isEqual)
isLessThanOrEqual(1, 5) // true, 1 <= 5
isLessThanOrEqual(1, 1) // true, 1 <= 1
```

## <br>Fixing type errors

If the predicate parameters don't match exactly, TypeScript might complain:

```typescript
const numOnly = (n: number) => true
const numAndStr = (n: number, str: string) => true

all(numOnly, numAndStr) // numAndStr gives type error
```

<br>A fix would be to ensure the predicate that accepts the most parameters is the first to be passed:

```typescript
// 'numAndStr' takes more parameters,
// so it should be at the front.
all(numAndStr, numOnly)
```

<br>If that doesn't work, or is not possible to do, you can specify the generic type _(which is an array of the parameter type(s))_:

```typescript
// number is 1st argument
// string is 2nd argument
all<[number, string]>(numOnly, numAndStr)
```
