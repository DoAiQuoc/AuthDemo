<template>
  <div id="container">
    <comp-header/>
    <comp-login/>
  </div>
</template>

<script>
import CompHeader from './components/CompHeader.vue'
import CompLogin from './components/CompLogin.vue'
import CompWelcome from './components/CompWelcome.vue'

export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    CompHeader,
    CompLogin,
    CompWelcome
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}

</style>
