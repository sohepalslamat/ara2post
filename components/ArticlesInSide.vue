<template>
  <div>
    <h2 align="center" class="mb-4 subheading grey--text text--darken-2">
      {{ title }}
    </h2>
    <v-card v-for="article in articles" :key="article.title" flat style="cursor: pointer;" class="mx-2 my-4 pa-3">
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
            v-if="author"
            text
            class="ma-0 body-2"
            color="rgb(117, 111, 111)"
          >
            {{ article.author }}
          </v-btn>
          <h6 class="mx-6 font-italic text-left grey--text text--darken-3">
            {{ article.created_at|format_date }}
          </h6>
        </v-flex>
      </v-layout>
    </v-card>
    <v-btn class="my-6 mx-4 lime darken-3" dark>
      عرض الكل
    </v-btn>
  </div>
</template>

<script>
import mixin from '../mixins.js'
export default {
  mixins: [mixin],
  props: {
    'title': { type: [String], required: true, default: 'مقالات الرأي' },
    'articles': { type: [Array], required: true },
    'author': { type: [Boolean], default: true }

  }

}
</script>

<style>

</style>
