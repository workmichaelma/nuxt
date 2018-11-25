<template>
  <div class="">
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
