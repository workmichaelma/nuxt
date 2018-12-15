<template>
  <div class="footer grey lighten-5">
    <v-container class="grey--text text--darken-4">
      <v-layout justify-center column class="text-xs-center footer__layout">
        <v-flex>
          <nuxt-link class="footer__logo" to="/">
            <img class="footer__logo__img" src="~/assets/images/working.gif"/>
          </nuxt-link>
        </v-flex>
        <v-flex>
          <div class="title">{{companyName}}</div>
        </v-flex>
        <v-flex>
          <v-layout class="social" justify-center>
            <v-flex class="social__item" v-for="(v, name) in contact" :key="name" shrink>
              <a :href="get_contactPath(name)" target="_blank">
                <img :src="require(`~/assets/images/${name}.png`)"/>
              </a>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex>
          <div class="subheading">{{address}}</div>
        </v-flex>
        <v-flex>
          <v-layout class="links" justify-center>
            <div class="links__item" v-for="(page, i) in pages" :key="i">
              <nuxt-link :to="page.path" class="grey--text">
                {{ page.label }}
              </nuxt-link>
              <template v-if="i < pages.length - 1"> | </template>
            </div>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import IsDesktop from '~/components/mixins/IsDesktop'
export default {
  name: 'main-footer',
  mixins: [IsDesktop],
  computed: {
    ...mapGetters({
      get_pages: 'pages/get_pages',
      get_Profile: 'profile/get_Profile',
      get_contactPath: 'profile/get_contactPath'
    }),
    pages () {
      return this.get_pages()
    },
    contact () {
      return this.get_Profile('Contact')
    },
    companyName () {
      return this.get_Profile('CompanyName')
    },
    address () {
      return this.get_Profile('Address')      
    }
  },
}
</script>
<style lang="stylus" scoped>
@import '~assets/style/app.styl'
a
  text-decoration none
.footer
  &__layout
    > .flex
      padding-bottom 10px
    .social
      &__item
        padding 0 5px
        img
          width 36px
          height 36px
    .links
      &__item
        &:not(:last-child)
          padding-right 5px
</style>


