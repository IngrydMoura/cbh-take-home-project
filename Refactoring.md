# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

#### Steps:
- I create the tests to verify if the the old code is working.
- To secure if the tests are coveraged, I run `yarn test --coverage`. 
- Rename the file to `deterministicPartitionKey.js` because `dpk.js` it can be anything
- I have separated in two different functions: `deterministicPartitionKey` and `partitionKeyToString`
- Before, I had a long function and I can't undestang what are happening with candidate or partitionKey. I was confused between what is `candidate` and `event.partitionKey`.
- The principal is the `event.partitionKey` needs to be a string, if don't is necessary to do `JSON.stringify`.
- Because of this, in the same function I confirm your type, and your length.
- At the end I return the partitionKey within a string or return the `TRIVIAL_PARTITION_KEY`

>  When I see that `candidate` was `event.partitionKey`, the variable `candidate` is not make sense.


### Problems
- Because of time I ended up not commiting the refactor slowly and that would have helped my thinking step by step
