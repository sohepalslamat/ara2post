<template>
  <v-card
    max-width="300"
    min-width="250"
    class="mx-auto my-4"
  >
    <v-img
      class="relative"
      src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
      max-height="194"
    />
    <v-list-item id="cc">
      <v-list-item-avatar>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
        />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">
          الثورة صفيح ساخن
        </v-list-item-title>
        <v-list-item-subtitle>محمد اللطيف</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>
.relative{
  position: relative;
}
#cc{
  position: absolute;
  top: 10px;
  left: 0px;
}
</style>
