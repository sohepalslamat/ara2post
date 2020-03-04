<template>
  <v-layout row warp justify-space-around>
    <v-flex lg8 xl8 class="pa-5">
      <ShowArticle />
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
        { 'title': ' القضية السورية القضية السورية القضية السورية الكون النظير الكون النظير الكون النظير الكون النظير',
          'author': 'رأفت الهايل',
          'body': 'اهلا وسهلا بكم في الكون النظير',
          'img': 'https://picsum.photos/1100/400?random',
          'category': 'سياسة'
        },
        { 'title': 'القضية السورية',
          'author': 'عيسى الحسن',
          'body': 'القضية السورية القضية السورية',
          'img': 'https://picsum.photos/1101/400?random',
          'category': 'اقتصاد'
        },
        { 'title': 'ادلب صفيح ساخن',
          'author': 'محمود القاسم',
          'body': 'ادلب على صفيح ساخن الأطراف تستعد ',
          'img': 'https://picsum.photos/1102/400?random',
          'category': 'اجتماعي'
        }

      ]
    }
  }

}
</script>

<style>

</style>
