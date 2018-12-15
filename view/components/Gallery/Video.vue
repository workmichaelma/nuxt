<template>
  <div class="video-gallery">

  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import IsDesktop from '~/components/mixins/IsDesktop'
export default {
  name: 'video-gallery',
  mixins: [IsDesktop],
  computed: {
    ...mapGetters({
      get_Videos: 'gallery/get_Videos'
    }),
  },
  data: () => ({
    
  }),
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
@import '~assets/style/app.styl'

</style>
