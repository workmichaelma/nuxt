<template>
  <div class="footer">
    <v-container>
      <!-- <v-layout align-center>
        <v-flex shrink>
          <v-layout class="links" wrap>
            <v-flex class="links__item" v-for="(page, i) in pages" :key="i">
              <nuxt-link :to="page.path">
                {{ page.label }}
              </nuxt-link>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-spacer/>
        <v-flex shrink class="rights">
          <v-layout class="social" align-center wrap>
            <v-flex class="social__item" v-for="(v, name) in contact" :key="name" shrink>
              <a :href="get_contactPath(name)" target="_blank">
                <img :src="require(`~/assets/images/${name}.png`)"/>
              </a>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout> -->
      <v-layout class="links" justify-start>
        <div class="links__item" v-for="(page, i) in pages" :key="i">
          <nuxt-link :to="page.path">
            {{ page.label }}
          </nuxt-link>
        </div>
      </v-layout>
      <div class="rights text-xs-right">
        <i>All Rights Reserved. </i>
      </div>
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
    }
  },
  mounted() {
    console.log(this.isDesktop)
  },
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
  .rights
    color #fff
  +desktop()
    .links
      &__item
        margin 0 15px
    .social 
      &__item
        margin 0 15px
    .rights
      font-size 12px
  +mobile()
    .container
      padding 8px
    .links
      &__item
        margin 0 5px
    .social 
      &__item
        margin 0 2px
    .rights
      font-size 10px
</style>


