<template>
  <div>
    <span
      style="cursor: pointer; border-radius:3px 0px 0px 3px;"
      class="pink white--text body-2 px-1 ml-6"
    >
      <v-icon right class="white--text ma-0">
        mdi-label fa-rotate-180
      </v-icon>
      <span>سياسة</span>
    </span>
    <span class="font-italic">{{ '2020-02-26 22:31:39.847176' |format_date }} </span>
    <h1 class="my-5 deep-orange--text text--darken-4">
      صفيح ساخن جداادلب
    </h1>
    <v-img src="https://picsum.photos/800/300?random" height="400" width="1000" alt="" />
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
      gffffffffffffffffffffffffkfghkfjhf
    </p>
  </div>
</template>

<script>
import mixin from '../mixins.js'
export default {
  mixins: [mixin]

}
</script>

<style>

</style>
