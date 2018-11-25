<template>
  <iframe
    width="100%"
    :height="height"
    frameborder="0" style="border:0" :src="url" allowfullscreen>
  </iframe>
</template>
<script>
export default {
  name: 'google-map',
  props: {
    height: {
      type: String,
      default: '100%'
    }
  },
  computed: {
    url () {
      return `https://www.google.com/maps/embed/v1/place?key=${this.key}&q=路德會協同中學`
    },
    key () {
      return `AIzaSyD_Gs9dM5d_I`
      // return `AIzaSyD_Gs9dM5d_I-0u9V9kWHVecQ6KxGwAn0U`
    }
  }  
}
</script>
<style lang="stylus" scoped>

</style>


