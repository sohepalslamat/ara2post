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
              <v-list-item-content id="item-c">
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
    <v-flex
      class="d-flex flex-wrap justify-space-around mb-6"
      color="grey lighten-2"
      flat
      tile
    >
      <v-card
        class="pa-2"
        align="center"
        flat
        tile
      >
        <h2 align="center" class=" mb-4 subheading grey--text">
          الرئيسية
        </h2>

        <v-flex class="d-flex flex-wrap">
          <Article v-for="i in 5" :key="i" class="mx-1" />
        </v-flex>
      </v-card>
      <v-card
        class="pa-2 align-self-auto"
        align="center"
        flat
        tile
      >
        <h2 align="center" class=" mb-4 subheading grey--text">
          الرئيسية
        </h2>

        <v-flex class="d-flex flex-wrap">
          <Article v-for="i in 5" :key="i" class="mx-1" />
        </v-flex>
      </v-card>
      <v-card
        class="pa-2"
        align="center"
        flat
        tile
      >
        <h2 align="center" class=" mb-4 subheading grey--text">
          الرئيسية
        </h2>

        <v-flex class="d-flex flex-wrap">
          <Article v-for="i in 5" :key="i" class="mx-1" />
        </v-flex>
      </v-card>
    </v-flex>
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
        { 'title': 'الكون النظير',
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
<style lang="scss">
.backg-img{
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;

}
#item-c{
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
  height: 110px;
  background-color: rgba(68, 61, 61, 0.507);
  position: absolute;
  bottom: 0px;
  right: 0px;
  left: 0px;
  }
</style>
