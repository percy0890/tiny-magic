# tiny-magic

Remove duplicates from an Array.

## Install

```
$ npm install @iamphenomenal/tiny-magic
```

## Usage

```js
const unique = require("@iamphenomenal/tiny-magic");

unique([1,1,2,3,3,4,5,5]]);
//=> [1,2,3,4,5]

unique(1337);
//=> Uncaught TypeError: unique wants an array!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```