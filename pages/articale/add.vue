<template>
  <v-card class="ma-12 pa-6">
    <v-form>
      <v-file-input show-size />
      <v-text-field>
        <template v-slot:label>
          عنوان المقال
        </template>
      </v-text-field>
      <tinymce id="d1" v-model="data" />
    </v-form>
  </v-card>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      data: '',
      options: {
        language_url: '/../ar.js' // This url points to location of persian language file.
      }
    }
  }

}
</script>

<style>

</style>
