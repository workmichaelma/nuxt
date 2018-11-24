import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      get_isDesktop: 'theme/get_isDesktop'
    }),
    isDesktop() {
      return this.get_isDesktop
    },
    navBarHeight() {
      return this.isDesktop ? 100 : 50
    }
  }
}
