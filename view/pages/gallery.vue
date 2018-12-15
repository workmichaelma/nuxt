<template>
  <div class="gallery">
    <photo-gallery></photo-gallery>
    <video-gallery></video-gallery>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import IsDesktop from '~/components/mixins/IsDesktop'
import PhotoGallery from '~/components/Gallery/Photo'
import VideoGallery from '~/components/Gallery/Video'
export default {
  name: 'gallery',
  mixins: [IsDesktop],
  computed: {
    ...mapGetters({
    })
  },
  data: () => ({
    
  }),
  methods: {
  },
  components: {
    PhotoGallery,
    VideoGallery
  }
}
</script>
<style lang="stylus" scoped>
@import '~assets/style/app.styl'

</style>
