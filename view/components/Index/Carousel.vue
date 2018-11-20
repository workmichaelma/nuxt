<template>
  <div class="carousel">
    <v-carousel hide-delimiters>
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
          <v-btn color="teal green darken-4" class="white--text carousel__text__box__btn" large>更多服務</v-btn>
        </div>
      </div>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        // {
        //   src: '../../assets/images/cover.jpeg'
        // },
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
.carousel {
  position: relative;

  &__text {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    &__box {
      width: 20%;
      min-width: 400px;
      padding: 24px;
      box-shadow: 3px 3px 13px 2px #616161; 

      &__btn {
        margin-top: 20px;
      }
    }
  }
}
</style>
