<template>
  <v-card
    :max-width="maxWidth"
    :min-width="minWidth"
    :width="width"
    class="mx-0 my-4"
  >
    <v-img
      class="relative backg-img"
      :src="data.img"
      :min-height="minHeight"
      :max-height="maxHeight"
      :height="height"
    />
    <v-card>
      <v-list-item-avatar v-if="false">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
        />
      </v-list-item-avatar>
      <v-list-item-content class="item-c" style="height: 90px;">
        <v-list-item-title align="center" class="white--text mt-0 title">
          {{ data.title }}
        </v-list-item-title>
        <v-chip
          id="author"
          label
          class="mx-1"
          text-color="white"
          outlined
          dense
        >
          {{ data.author }}
        </v-chip>
        <v-chip
          id="inf"
          class="mx-0"
          color="pink"
          label
          text-color="white"
        >
          {{ data.category }}
          <v-icon right>
            mdi-label fa-rotate-180
          </v-icon>
        </v-chip>
      </v-list-item-content>
    </v-card>

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
  props: {
    'maxWidth': { type: [String], default: '95%' },
    'minWidth': { type: [String], default: '200' },
    'maxHeight': { type: [String], default: '600' },
    'minHeight': { type: [String], default: '200' },
    'height': { type: [String], default: '200' },
    'width': { type: [String], default: '100%' },
    'data': { type: [Object], required: true }
  }

}
</script>

<style lang="scss">
.relative{
  position: relative;
}
</style>
