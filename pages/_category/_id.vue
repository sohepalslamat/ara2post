<template>
  <v-layout row warp justify-space-around>
    <v-flex lg8 xl8 class="pa-5">
      <ShowArticle :article="article" />
    </v-flex>
    <v-flex xs12 md12 lg3 xl3>
      <ArticlesInSide :articles="slides" />
    </v-flex>
  </v-layout>
</template>

<script>
import mixin from '../../mixins.js'
import ArticlesInSide from '../../components/ArticlesInSide.vue'
import ShowArticle from '../../components/ShowArticle.vue'
export default {
  components: {
    ArticlesInSide,
    ShowArticle

  },
  mixins: [mixin],
  data () {
    return {
      id: this.$route.params.id,
      category: this.$route.params.category,
      slides: this.$store.state.articles
    }
  },
  computed: {
    article () {
      // eslint-disable-next-line eqeqeq
      return this.slides.find(slide => slide.category == this.category && slide.id == this.id)
    }
  },
  head () {
    return {
      title: this.article.title
    }
  }

}
</script>

<style>

</style>
