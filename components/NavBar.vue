<template>
  <v-card class="overflow-hidden">
    <v-navigation-drawer
      v-model="drawer"
      app
      flat
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
            <v-list-item-title class="title py-4">
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
      flat
      shrink-on-scroll
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

      <v-btn icon @click="drawer=!drawer">
        <v-icon>account_circle</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-spacer />
      <v-toolbar-title>
        <span class="grey--text text--lighten-1">Fekra</span><span class="display-1">Post</span>
      </v-toolbar-title>

      <v-app-bar-nav-icon @click="drawer=!drawer" />

      <template v-slot:extension>
        <v-tabs right class="pr-8">
          <v-tab
            v-for="link in rev_links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-title class="headline">
              {{ link.text }}
            </v-list-item-title>
          </v-tab>
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
      <v-footer dark>
        <v-btn class="title" text color="accent-4">
          <span>المفضلات</span>
        </v-btn>

        <v-btn class="title" text color="accent-4">
          <span>الموقع</span>
        </v-btn>
        <v-spacer />
        <span>&copy; 2020</span>
      </v-footer>
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
  },
  computed: {
    rev_links () {
      return [...this.links].reverse()
    }
  }

}
</script>

<style>

</style>
