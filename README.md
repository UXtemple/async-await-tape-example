# Async/await tape example

An example on how to write asynchronous tests using async/await (thanks babel :D) and
[tape](https://github.com/substack/tape).

Spoiler: tests and code are written in ES6/7 :).
Spoiler 2: you can also use this with other testing frameworks ;).

## The code
- [index-test.js](index-test.js)
- [index.js](index.js)

## Stuff to read
For more on async/await, read
[Taming the asynchronous beast with ES7](http://pouchdb.com/2015/03/05/taming-the-async-beast-with-es7.html)
from [Nolan Watson](https://twitter.com/nolanlawson), it's an amazing write up on the subject!

For more on tape, [see the main repo](https://github.com/substack/tape) and [this (perhaps very opinionated) blog
post](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4).


## Some helpers
[Here's a little bash script to run multiple
test files](https://github.com/UXtemple/autoprefix/blob/master/.bin/test):

```
#!/usr/bin/env bash

where=${1:-.}
tests=$1
if [ -d $where ]; then
  tests=`find $where -type f -name '*-test.*' -not -path './node_modules/*'`
fi

for test in $tests; do
  ./node_modules/.bin/babel-node $2 $test
done
```

You can also use [tape's CLI](https://github.com/substack/tape#usage).


MIT license.

With <3 by [UXtemple](https://github.com/UXtemple).
