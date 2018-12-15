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
      return 70 //this.isDesktop ? 100 : 50
    }
  }
}
