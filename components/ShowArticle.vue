<template>
  <div>
    <span
      style="cursor: pointer; border-radius:3px 0px 0px 3px;"
      class="pink white--text body-2 px-1 ml-6"
    >
      <v-icon right class="white--text ma-0">
        mdi-label fa-rotate-180
      </v-icon>
      <span>{{ article.category|category_filter }}</span>
    </span>
    <span class="font-italic">{{ article.created_at |format_date }} </span>
    <h1 class="my-5 deep-orange--text text--darken-4">
      {{ article.title }}
    </h1>
    <v-img :src="article.img" height="400" width="1000" alt="" />
    <div class="my-3 mx-12">
      <v-avatar
        size="70"
        class="profile"
      >
        <v-img src="https://picsum.photos/600/300?random" />
      </v-avatar>
      <h4 class="d-inline mx-2 grey--text">
        لطيف محمد
      </h4>
    </div>

    <p class="my-5">
      {{ article.body }}
    </p>
  </div>
</template>

<script>
import mixin from '../mixins.js'
export default {
  mixins: [mixin],
  props: {
    article: { type: Object, required: true }
  }

}
</script>

<style>

</style>
