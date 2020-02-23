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
              <v-list-item-content style="height: 115px;" class="item-c">
                <v-list-item-title align="center" class="display-1">
                  {{ slide.title }}
                </v-list-item-title>
                <v-chip
                  id="author"
                  label
                  class="mx-4"
                  text-color="white"
                  outlined
                  dense
                >
                  {{ slide.author }}
                </v-chip>
                <v-chip
                  id="inf"
                  class="mx-2"
                  color="pink"
                  label
                  text-color="white"
                >
                  {{ slide.category }}
                  <v-icon right>
                    mdi-label fa-rotate-180
                  </v-icon>
                </v-chip>
              </v-list-item-content>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-container>
    <v-divider />
    <v-layout row warp justify-space-around>
      <v-flex xs12 md6 lg4 xl4>
        <h2 align="center" class=" mb-4 subheading grey--text">
          الرئيسية
        </h2>
        <Article
          v-for="article in slides"
          :key="article.title"
          :data="article"
          width="70%"
          class="mx-auto"
        />
      </v-flex>

      <v-flex xs12 md6 lg4 xl3>
        <h2 align="center" class=" mb-4 subheading grey--text">
          المنتصف
        </h2>
        <Article
          v-for="article in slides"
          :key="article.title"
          :data="article"
          height="300"
          width="90%"
          class="mx-auto"
        />
      </v-flex>

      <v-flex xs12 md8 lg3 xl3>
        <h2 align="center" class=" mb-4 subheading grey--text">
          الرئيسية
        </h2>
        <v-card v-for="article in slides" :key="article.title" flat style="cursor: pointer;" class="ma-2 pa-3">
          <v-layout row nowrap justify-start>
            <v-flex xs12 lg4 xl4 align-self-start>
              <v-avatar
                class="mr-2"
                size="100"
                tile
              >
                <v-img :src="article.img" />
              </v-avatar>
            </v-flex>

            <v-flex xs12 lg6 xl7 align-self-start class="mx-2">
              <p
                class="title text-right mb-0"
                v-text="article.title"
              />
              <v-btn
                text
                class="ma-0 body-2"
                color="rgb(117, 111, 111)"
              >
                {{ article.author }}
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import Article from '../components/Article.vue'
export default {
  components: {
    Article
  },
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
        { 'title': 'الكون النظير الكون النظير الكون النظير الكون النظير',
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
  #inf{
    position: absolute;
    bottom: 0px;
    right: 0px;
    cursor: pointer;
  }
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
