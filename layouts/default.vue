<template>
  <v-app>
    <nav-bar />
    <v-footer app dark>
      <v-btn class="title" text color="accent-4">
        <span>المفضلات</span>
      </v-btn>

      <v-btn class="title" text color="accent-4">
        <span>الموقع</span>
      </v-btn>
      <v-spacer />
      <span>&copy; 2020</span>
    </v-footer>
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
  }
}
</script>
