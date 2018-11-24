<template>
  <div class="carousel">
    <!-- <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <v-layout class="carousel__text" align-center>
      <div class="container">
        <div class="carousel__text__box white text-xs-center">
          <h3 v-html="text"></h3>
          <v-btn color="teal green darken-4" class="white--text carousel__text__box__btn" nuxt large to="about-us">更多服務</v-btn>
        </div>
      </div>
    </v-layout> -->
    <div class="carousel__img" :style="{'background-image': `url(${items[0].src})`}">
      <!-- <img :src="items[0].src"/> -->
    </div>
    <v-layout class="carousel__text" align-center>
      <div class="container">
        <div class="carousel__text__box white text-xs-center">
          <div class="carousel__text__box__text" v-html="text"></div>
          <v-btn color="teal green darken-4" class="white--text carousel__text__box__btn" nuxt :large="isDesktop" :small="!isDesktop" to="about-us">更多服務</v-btn>
        </div>
      </div>
    </v-layout>
  </div>
</template>

<script>
import IsDesktop from '~/components/mixins/IsDesktop'
export default {
  name: 'carousel',
  mixins: [IsDesktop],
  data() {
    return {
      items: [
        {
          src: require('~/assets/images/cover.jpeg')
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  },
  computed: {
    text() {
      return `本公司專業清拆各項工程,包括室內裝修,樓廠,寫字樓,舊樓等等... `
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/style/app.styl'

.carousel
  position: relative;

  &__img
    width 100%    
    background-position: center;
    background-size: cover;

  &__text
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    &__box
      width: 20%;
      box-shadow: 3px 3px 13px 2px #616161;
      &__text
        font-weight bold

+desktop()
  .carousel
    &__img
      height 500px
    &__text
      &__box
        min-width: 400px;
        padding: 24px;
        &__text
          font-size 18px
        &__btn
          margin-top: 20px;
+mobile()
  .carousel
    &__img
      height 300px
    &__text
      &__box
        min-width: 200px;
        padding: 12px;
        &__text
          font-size 12px
        &__btn
          margin-top: 10px;
      
</style>
