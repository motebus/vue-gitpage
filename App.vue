<template>
  <div id="app">
    <!-- My name is George and I am a 37 years old Web Dev. -->
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    console.log(
      this.$pageUtil.get({
        field: "name",
        reducer: value => `hello ${value}`
      })
    );

    let allQueryValue = this.$pageUtil.get();
    console.log(allQueryValue);
    
    let mms = this.$pageUtil.createMMS()
    console.log(mms)
  }
};
</script>