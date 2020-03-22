<template>
  <v-card flat class="overflow-hidden">
    <v-navigation-drawer
      v-model="drawer"
      class="hidden-md-and-up"
      app
      flat
      dark
      right
      mini-variant
      expand-on-hover
      color="rgb(19, 45, 51)"
    >
      <v-list dense two-line>
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
            <v-list-item-title class="title py-4 mx-3">
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      class="py-1"
      color="rgb(57, 74, 76)"
      dark
      flat
      dense
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-2"
      scroll-threshold="100"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(236, 61, 74, 0.5), rgba(64, 60, 61, 0.5)"
        />
      </template>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer=!drawer" />
      <v-toolbar-title>
        <span class="grey--text text--lighten-1">Fekra</span><span class="display-1">Post</span>
      </v-toolbar-title>

      <v-spacer />
      <v-btn icon class="mx-4 mt-1">
        <v-icon size="30px">
          search
        </v-icon>
      </v-btn>

      <v-speed-dial
        v-model="fab"
        direction="bottom"
        open-on-hover
        transition="slide-y-reverse-transition"
      >
        <template v-slot:activator>
          <v-btn
            v-model="fab"
            color="blue darken-2"
            dark
            fab
          >
            <v-icon v-if="fab" size="40px">
              mdi-close
            </v-icon>
            <v-icon v-else size="40px">
              mdi-account-circle
            </v-icon>
          </v-btn>
        </template>
        <v-btn
          fab
          dark
          small
          color="green"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="indigo"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="red"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-speed-dial>

      <template v-slot:extension>
        <v-tabs class="pr-8 hidden-xs-only">
          <v-tab
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-title>
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
      <v-content
        class="mt-5"
      >
        <nuxt />
      </v-content>
      <v-footer
        dark
        padless
      >
        <v-card
          color="rgb(57, 74, 76)"
          tile
          class="white--text text-center"
        >
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </v-card-text>

          <v-divider />

          <v-card-text class="grey--text text--lighten-2 subtitle-1">
            © {{ new Date().getFullYear() }} — <span>FekraPost</span>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      fab: false,
      links: [
        { icon: 'home', text: 'الرئيسية', route: '/' },
        { icon: 'card_travel', text: 'سياسة', route: '/politics' },
        { icon: 'euro_symbol', text: 'اقتصاد', route: '/economy' },
        { icon: 'library_books', text: 'ثقافة', route: '/culture' },
        { icon: 'rowing', text: 'منوعات', route: '/entertainment' },
        { icon: 'contact_mail', text: 'اتصل بنا', route: '/contact' }

      ],
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    }
  },
  computed: {
  }

}
</script>

<style lang="scss">
/* Hide scrollbar for Chrome, Safari and Opera */
#scrolling-techniques-2::-webkit-scrollbar {
    display: none;
}
/* Hide scrollbar for IE and Edge */
#scrolling-techniques-2{
  -ms-overflow-style: none;
}
</style>
