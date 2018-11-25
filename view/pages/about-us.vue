<template>
  <div class="about-us">
    <cover-text/>
    <contact-box/>
  </div>
</template>

<script>
import axios from 'axios'
import CoverText from '~/components/AboutUs/CoverText'
import ContactBox from '~/components/AboutUs/ContactBox'
  export default {
    data: () => ({
    }),
    mounted: () => {
      // axios.get('http://0.0.0.0:81').then((res, err) => {
      //   console.error(res, err)
      // })
    },
    components: {
      CoverText,
      ContactBox
    }
  }
</script>

<style lang="stylus" scoped>
</style>
