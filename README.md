## Vue-gitpage

[Document](https://motebus.github.io/vue-gitpage/)

``` javascript
/* main.js */

import Vue from 'vue'
import App from './App'
import pageUtil from 'vue-gitpage'

Vue.use(pageUtil)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

### api

- **get**

  Arguements :

  - `{Object} query`
  - `{string} query.field`
  - `{function} query.reducer` 

  Default : 

  - `query.field : undefined`
  - `query.reducer : value => value`

  Usage

  ``` javascript
  /* vue component */
  <script>
  export default {
    name: "App",
    created() {
        let greeting = this.$pageUtil.get({
            field: 'name', 
            reducer:  (value) => `hello ${value}`
        })
        console.log(greeting)
        
        let allQueryValue = this.$pageUtil.get()
        console.log(allQueryValue)
    }
  }
  </script>
  ```