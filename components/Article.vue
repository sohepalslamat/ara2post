<template>
  <v-card
    :max-width="maxWidth"
    :min-width="minWidth"
    :width="width"
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
      <v-list-item-content style="min-height: 100px;" class="item-c">
        <h2 align="center" class="white--text mb-9 px-4 title">
          {{ data.title }}
        </h2>
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
        <span
          style="position: absolute; cursor: pointer; bottom: 0px; right: 0px;
                 border-radius:3px 0px 0px 3px;"
          class="pink white--text body-1 px-2 py-1"
        >
          <v-icon right class="white--text ma-0">
            mdi-label fa-rotate-180
          </v-icon>
          {{ data.category }}
        </span>
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
