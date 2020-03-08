<template>
  <v-layout row warp justify-space-around>
    <v-flex lg8 xl8 class="pa-5">
      <ShowArticle :article="slides[0]" />
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
      slides: [
        { 'id': 1,
          'title': ' القضية السورية القضية السورية القضية السورية الكون النظير الكون النظير الكون النظير الكون النظير',
          'author': 'رأفت الهايل',
          'body': 'اهلا وسهلا بكم في الكون النظير',
          'img': 'https://picsum.photos/1100/400?random',
          'category': 'politics',
          'created_at': '2020-03-04 22:31:39.847176'
        },
        { 'id': 2,
          'title': 'القضية السورية',
          'author': 'عيسى الحسن',
          'body': 'القضية السورية القضية السورية',
          'img': 'https://picsum.photos/1101/400?random',
          'category': 'economy',
          'created_at': '2020-03-01 22:31:39.847176'
        },
        { 'id': 3,
          'title': 'ادلب صفيح ساخن',
          'author': 'محمود القاسم',
          'body': 'ادلب على صفيح ساخن الأطراف تستعد ',
          'img': 'https://picsum.photos/1102/400?random',
          'category': 'entertainment',
          'created_at': '2020-03-05 22:31:39.847176'
        }

      ]
    }
  }

}
</script>

<style>

</style>
