<template>
  <v-card flat>
    <v-container>
      <v-carousel
        cycle
        class="mb-5"
        height="400"
        hide-delimiters
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
          <v-sheet
            height="100%"
          >
            <v-row
              :style="{ backgroundImage: 'url(' + slide.img + ')' }"
              class="fill-height relative backg-img"
              align="center"
              justify="center"
              @click="$router.push(slide.category + '/'+ slide.id)"
            >
              <v-list-item-content style="min-height: 115px;" class="item-c">
                <h2 align="center" class="display-1 mb-9">
                  {{ slide.title }}
                </h2>
                <span
                  style="position: absolute; cursor: pointer; bottom: 4px; left: 2px;"
                  class="white--text subheading mx-4"
                >
                  <span class="mx-5 font-italic">{{ '2020-02-26 22:31:39.847176' |format_date }} </span>
                  <span v-if="false">{{ slide.author }}</span>
                </span>
                <span
                  style="position: absolute; cursor: pointer; bottom: 0px; right: 0px;
                 border-radius:3px 0px 0px 3px;"
                  class="pink white--text subheading px-4 py-1"
                >
                  <v-icon right class="white--text ma-0">
                    mdi-label fa-rotate-180
                  </v-icon>
                  {{ slide.category|category_filter }}
                </span>
              </v-list-item-content>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-container>
    <v-divider class="my-6" />
    <v-layout row warp justify-space-around>
      <v-flex xs12 md12 lg3 xl3>
        <v-layout column>
          <v-flex
            v-for="data in slides"
            :key="data.title"
            class="my-5"
            style="cursor: pointer;"
          >
            <v-img
              class="backg-img mx-auto relative"
              :src="data.img"
              height="200"
              width="300"
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
            <h2 align="center" style="width:300px" class="my-1 mx-auto title">
              {{ data.title }}
            </h2>
            <span class="font-italic mr-6">{{ data.created_at|format_date }} </span>
          </v-flex>
          <v-btn class="my-6 lime darken-3" dark>
            عرض المزيد
          </v-btn>
        </v-layout>
      </v-flex>

      <v-flex xs12 md12 lg5 xl5>
        <Article
          v-for="article in slides"
          :key="article.title"
          :data="article"
          height="270"
          width="600"
          class="mx-auto my-5"
        />
      </v-flex>

      <v-flex xs12 md12 lg3 xl3>
        <ArticlesInSlide :articles="slides" />
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import Article from '../components/Article.vue'
import ArticlesInSlide from '../components/ArticlesInSide'
import mixin from '../mixins.js'
export default {
  components: {
    Article,
    ArticlesInSlide
  },
  mixins: [mixin],
  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4'
      ],
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
  },
  computed: {
    widthscreen () {
      return this.$vuetify.breakpoint.name
    }

  } }
</script>
<style lang="scss">
.backg-img{
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;

}
</style>
