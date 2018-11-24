<template>
  <div class="footer">
    <v-container>
      <v-layout align-center>
        <v-flex shrink>
          <v-layout class="links" wrap>
            <v-flex class="links__item" v-for="(page, i) in pages" :key="i" :xs4="!isDesktop">
              <nuxt-link :to="page.path">
                {{ page.label }}
              </nuxt-link>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-spacer/>
        <v-flex shrink>
          <v-layout class="social" align-center wrap>
            <v-flex class="social__item" v-for="(v, name) in contact" :key="name" shrink :xs6="!isDesktop">
              <a :href="get_contactPath(name)" target="_blank">
                <img :src="require(`~/assets/images/${name}.png`)"/>
              </a>
            </v-flex>
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
      get_contact: 'contact/get_contact',
      get_contactPath: 'contact/get_contactPath'
    }),
    pages () {
      return this.get_pages()
    },
    contact () {
      return this.get_contact()
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~assets/style/app.styl'
a
  text-decoration none
  color #fff
.footer
  background-color #1e252e
  .links
    &__item
      text-align center
  .social 
    $social-height = 30px
    &__item
      height $social-height
      a,
      img
        width $social-height
        height $social-height
  +desktop()
    .links
      &__item
        margin 0 15px
    .social 
      &__item
        margin 0 15px
  +mobile()
    .container
      padding 8px
    .links
      &__item
        margin 2px 0
    .social 
      &__item
        margin 2px 0
</style>


