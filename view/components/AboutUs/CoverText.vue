<template>
  <div class="cover-text">
    <div class="cover-text__background"></div>
    <div class="text-area">
      <v-container>
        <div class="slogan">關於我們</div>
        <v-card>
          <v-card-text class="text-area__text" v-html="text"></v-card-text>
        </v-card>
      </v-container>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import IsDesktop from '~/components/mixins/IsDesktop'
export default {
  name: '',
  mixins: [IsDesktop],
  computed: {
    ...mapGetters({
      get_Profile: 'profile/get_Profile',
    }),
    text () {
      return this.get_Profile('AboutUs')
    }
  },
  data: () => ({
    
  }),
  methods: {
  },
}
</script>
<style lang="stylus" scoped>
@import '~assets/style/app.styl'
.cover-text
  &__background
    width 100%
    background-image url(https://www.generationsforpeace.org/wp-content/uploads/2018/02/page-heading-background-contact-us.jpg)
    background-size cover
    background-position center
  .text-area
    position relative
    .slogan
      padding-bottom 10px
      font-size 32px
      text-align center
      color rgb(97, 78, 78)
    &__text
      color #787878
      letter-spacing 2px

  +desktop()
    &__background
      height 581px
    .text-area
      margin-top -200px
      &__text
        padding 48px
        font-size 18px
        line-height 27px

  +mobile()
    &__background
      height 290px
    .text-area
      margin-top -100px
      &__text
        padding-top 48px
        padding-bottom 48px
        font-size 16px
        line-height 24px
</style>
