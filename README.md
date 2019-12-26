## Introduction
Flat grid allows you to deal with 2 dimentional data while it is stored in a flat (1D) array.

## Example
```javascript
const fg = FlatGrid(5, 4); // create grid of 5 rows and 4 columns
fg.set(5, 4, 1); // set last element of last row to 1
fg.get(5, 4); // get previously set element

```

### API


### Development
Run `yarn install` and then `yarn run build` or `yarn run watch`

**Runing tests**
* `yarn run test`
