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
                  {{ slide.category }}
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
                <span>{{ data.category }}</span>
              </span>
            </v-img>
            <h2 align="center" style="width:300px" class="my-1 mx-auto title">
              {{ data.title }}
            </h2>
            <span class="font-italic mr-6">{{ '2020-02-26 22:31:39.847176' |format_date }} </span>
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
        <h2 align="center" class=" mb-4 subheading grey--text text--darken-2">
          مقالات الرأي
        </h2>
        <v-card v-for="article in slides" :key="article.title" flat style="cursor: pointer;" class="mx-2 my-4 pa-3">
          <v-layout row nowrap justify-start>
            <v-flex xs12 lg4 xl4 align-self-start>
              <v-avatar
                class="mr-2"
                size="110"
                tile
              >
                <v-img :src="article.img" />
              </v-avatar>
            </v-flex>

            <v-flex xs12 lg6 xl7 align-self-start class="mr-4">
              <h2
                class="body-1 text-right mb-0 "
                v-text="article.title"
              />
              <v-btn
                text
                class="ma-0 body-2"
                color="rgb(117, 111, 111)"
              >
                {{ article.author }}
              </v-btn>
              <h6 class="font-italic text-left grey--text text--darken-3">
                {{ '2020-02-26 22:31:39.847176' |format_date }}
              </h6>
            </v-flex>
          </v-layout>
        </v-card>
        <v-btn class="my-6 lime darken-3" dark>
          عرض الكل
        </v-btn>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import Article from '../components/Article.vue'
import mixin from '../mixins.js'
export default {
  components: {
    Article
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
.item-c{
  #author{
    position: absolute;
    bottom: 0px;
    left: 0px;
    border: none;
    cursor: pointer;
  }
  background-color: rgba(68, 61, 61, 0.507);
  position: absolute;
  bottom: 0px;
  right: 0px;
  left: 0px;
  }
</style>
