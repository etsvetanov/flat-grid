## Introduction
Flat grid allows you to deal with 2 dimentional data while it is stored in a flat (1D) array.

## Example
```javascript
const fg = FlatGrid(5, 4); // create grid of 5 rows and 4 columns
fg.set(4, 3, 1); // set last element of last row to 1
fg.get(4, 3); // get previously set element

```

### API


### Development
Run `yarn install` and then `yarn run build` or `yarn run watch`

**Runing tests**
* `yarn run test`

Tests are run against the code in the `dist` folder to avoid transpilation. Hence if there is a change in ts code you need to make sure the code is rebuild before running tests.

Node version > 12 is necessary to be able to run tests (due to ES import/export features)

