<template>
  <v-app>
    <nav-bar />
  </v-app>
</template>

<script>
import NavBar from '../components/NavBar.vue'
export default {
  components: {
    NavBar
  },
  data () {
    return {
    }
  },
  created () {
    this.$vuetify.rtl = true
  }
}
</script>
<style lang="scss">
*{
  box-sizing: border-box;
}

</style>
