<template>
  <v-card flat>
    <h2 align="right" class="mr-12 ma-4 subheading grey--text">
      الرئيسية
    </h2>

    <v-flex class="d-flex flex-wrap justify-center mt-10 px-2">
      <v-card
        v-for="data in slides"
        :key="data.title"
        class="ma-4"
        height="280"
        width="280"
        style="cursor: pointer;"
      >
        <v-img
          class="backg-img mx-auto relative"
          :src="data.img"
          height="150"
        >
          <span
            style="position: absolute; cursor: pointer; bottom: 0px; right: 0px;
                 border-radius:3px 0px 0px 3px;"
            class="pink white--text body-2 px-1"
          >
            <v-icon right class="white--text ma-0">
              mdi-label fa-rotate-180
            </v-icon>
            <span>{{ data.category|category_filter }}</span>
          </span>
        </v-img>
        <div>
          <h2 align="right" style="width:250px;" class="three_line px-2 mt-2 mb-10 subtitle-1">
            {{ data.title }}
          </h2>
          <v-card-actions class="py-0 pr-3" style="position: absolute; bottom: 0px; left:0px; right: 0px;">
            <span class="font-italic body-2">{{ data.created_at|format_date }} </span>
            <v-spacer />
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-flex>
    <div class=" text-center">
      <v-btn width="150" class="my-6 lime darken-3" dark>
        المزيد
      </v-btn>
    </div>
    <div class="py-4 text-center">
      <v-pagination
        v-model="page"
        :length="15"
        :total-visible="7"
      />
    </div>
  </v-card>
</template>

<script>
// import Article from '../../components/Article.vue'
import mixin from '../../mixins.js'
export default {
  components: {
    // Article
  },
  mixins: [mixin],
  data () {
    return {
      page: 1,
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
        },
        { 'id': 4,
          'title': ' القضية السورية القضية السورية القضية السورية الكون النظير الكون النظير الكون النظير الكون النظير',
          'author': 'رأفت الهايل',
          'body': 'اهلا وسهلا بكم في الكون النظير',
          'img': 'https://picsum.photos/1100/400?random',
          'category': 'politics',
          'created_at': '2020-03-04 22:31:39.847176'
        },
        { 'id': 5,
          'title': 'القضية السورية',
          'author': 'عيسى الحسن',
          'body': 'القضية السورية القضية السورية',
          'img': 'https://picsum.photos/1101/400?random',
          'category': 'economy',
          'created_at': '2020-03-01 22:31:39.847176'
        },
        { 'id': 6,
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
.three_line {
    line-height: 1.5em;
    max-height: 5em;
    overflow: hidden;
}

</style>
