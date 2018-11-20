<template>
    <v-toolbar
      :clipped-right="clipped"
      :height="navBarHeight"
      fixed
      app
      color="#fff">
        <v-container 
            fill-height
            class="nav"
            pt-0 pb-0
            justify-space-between>
            <nuxt-link class="nav__logo" to="/">
                <img class="nav__logo__img" src="../../assets/images/logo.png"/>
            </nuxt-link>
            <v-btn class="nav__menu" outline color="brown lighten-1">
                <v-icon>menu</v-icon>
            </v-btn>
        </v-container>
    </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'nav-bar',
  data() {
    return {
      clipped: false
    }
  },
  mounted() {},
  computed: {
    ...mapGetters({
      get_isDesktop: 'theme/get_isDesktop'
    }),
    isDesktop() {
      return this.get_isDesktop
    },
    navBarHeight() {
      return this.isDesktop ? 100 : 50
    }
  }
}
</script>

<style lang="stylus" scoped>
.nav {
    margin: 0 auto;

    &__logo {
        display: block;
        height: 90%;

        &__img {
            height: 100%;
        }
    }

    &__menu {
        width: 40px;
        height: 40px;
        min-width: auto;
        box-shadow: 1px 1px 1px 0px rgba(141, 110, 99, 0.69);
        border-width: 2px;
    }
}
</style>

<style lang="stylus">
.nav {
    margin: 0 auto;

    &__logo {
        display: block;
        height: 90%;

        &__img {
            height: 100%;
        }
    }

    &__menu {
        width: 40px;
        height: 40px;
        min-width: auto;
        box-shadow: 1px 1px 1px 0px rgba(141, 110, 99, 0.69);
        border-width: 2px;
    }
}
</style>