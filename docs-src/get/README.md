# get

**Arguements**

- `{Object} query`
- `{string} query.field`
-  `{function} query.reducer`

**Default**

- `query.field: undefined`
- `query.reducer: value => value`

**Usage**

``` javascript
/* Vue component */

// get the "name" field's value
let greeting = this.$pageUtil.get({
    field: 'name',
    reducer: (value) => `hello ${value}`
})

// default will get the all fields value
let allQueryValue = this.$pageUtil.get()
```

