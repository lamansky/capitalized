# capitalized

Returns true if a string’s first letter is uppercase.

## Installation

To install using [Node.js](https://nodejs.org/):

```bash
npm i capitalized
```

## API

The module exports a single function.

### Parameter

`str` (string)

### Return Values

* `true` if `str` is capitalized
* `false` otherwise

## Example

```javascript
const capitalized = require('capitalized')

capitalized('not capitalized') // false
capitalized('Capitalized') // true
capitalized('UPPERCASE') // true
```
