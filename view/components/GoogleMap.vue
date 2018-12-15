<template>
  <iframe
    width="100%"
    :height="height"
    frameborder="0" style="border:0" :src="url" allowfullscreen>
  </iframe>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'google-map',
  props: {
    height: {
      type: String,
      default: '100%'
    }
  },
  computed: {
    ...mapGetters({
      get_Profile: 'profile/get_Profile',
    }),
    url () {
      return `https://www.google.com/maps/embed/v1/place?key=${this.key}&q=${this.address}`
    },
    key () {
      // return `AIzaSyD_Gs9dM5d_I`
      return `AIzaSyD_Gs9dM5d_I-0u9V9kWHVecQ6KxGwAn0U`
    },
    address () {
      return this.get_Profile('Address')      
    }
  }  
}
</script>
<style lang="stylus" scoped>

</style>


