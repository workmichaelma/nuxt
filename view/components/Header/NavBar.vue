<template>
  <v-toolbar
    class="nav-bar"
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
        <v-flex shrink fill-height>
          <nuxt-link class="nav__logo fill-height" to="/">
              <img class="nav__logo__img" src="~/assets/images/logo.png"/>
          </nuxt-link>
        </v-flex>
        <v-spacer/>
        <!-- <v-btn class="nav__menu" outline color="brown lighten-1">
            <v-icon>menu</v-icon>
        </v-btn> -->
        <v-flex shrink>
          <contact-list/>
        </v-flex>
      </v-container>
  </v-toolbar>
</template>

<script>
import ContactList from './ContactList'
import IsDesktop from '~/components/mixins/IsDesktop'
export default {
  name: 'nav-bar',
  mixins: [IsDesktop],
  data() {
    return {
      clipped: false
    }
  },
  mounted() {},
  components: {
      ContactList
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/style/app.styl'
.nav-bar
  +mobile()
    height 50px
      
  +desktop()
    height 100px
.nav {
  margin: 0 auto;
  padding: 5px 0 !important;

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
  margin: 0 auto !important;

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