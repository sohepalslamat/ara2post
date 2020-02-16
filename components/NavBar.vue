<template>
  <v-card class="overflow-hidden">
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      right
      mini-variant
      expand-on-hover
      color="rgb(19, 45, 51)"
    >
      <v-list dense align="right" two-line>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="title">
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="rgb(57, 74, 76)"
      dark
      dense
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-2"
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(236, 61, 74, 0.5), rgba(64, 60, 61, 0.5)"
        />
      </template>

      <v-app-bar-nav-icon @click="drawer=!drawer" />

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-2"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px; margin-top: 250px">
        <nuxt class="mt-12 pa-12" />
      </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      links: [
        { icon: 'home', text: 'الرئيسية', route: '/' },
        { icon: 'card_travel', text: 'سياسة', route: '/politics' },
        { icon: 'euro_symbol', text: 'اقتصاد', route: '/economy' },
        { icon: 'library_books', text: 'ثقافة', route: '/culture' },
        { icon: 'rowing', text: 'منوعات', route: '/entertainment' },
        { icon: 'contact_mail', text: 'اتصل بنا', route: '/contact' }

      ]
    }
  }

}
</script>

<style>

</style>
