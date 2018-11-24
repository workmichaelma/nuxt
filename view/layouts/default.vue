<template>
  <v-app class="white" id="v-app">
    <!-- <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <nav-bar/>
    <v-content>
        <nuxt />
    </v-content>
    <main-footer/>
    <v-navigation-drawer
      :right="right"
      v-model="rightDrawer"
      temporary
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import NavBar from '../components/Header/NavBar'
import MainFooter from '../components/MainFooter'
  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    },
    components: {
      NavBar,
      MainFooter,
    },
    created () {
      this.update_isDesktop(this.isDesktop)
    },
    computed: {
      isDesktop () {
        return this.$vuetify.breakpoint.mdAndUp
      }
    },
    watch: {
      isDesktop () {
        this.update_isDesktop(this.isDesktop)
      }
    },
    methods: {
      ...mapActions({
        update_isDesktop: 'theme/update_isDesktop'
      })
    }
  }
</script>

<style lang="stylus">
#v-app
  .nav-bar,
  .v-contect,
  .footer
    width 100%

@media only screen and (min-width: 960px) {
  .container {
    max-width: 900px !important;
  }
}
@media only screen and (min-width: 1264px) {
  .container {
    max-width: 900px !important;
  }
}
@media only screen and (min-width: 1904px) {
  .container {
    max-width: 900px !important;
  }
}

</style>
