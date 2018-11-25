<template>
  <div class="index-page">
    <carousel/>
    <page-list/>
    <cooperator/>
    <google-map :height="isDesktop ? '450' : '225'"/>
  </div>
</template>

<script>
import IsDesktop from '~/components/mixins/IsDesktop'
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Carousel from '~/components/Index/Carousel'
import PageList from '~/components/Index/PageList'
import Cooperator from '~/components/Index/Cooperator'
import GoogleMap from '~/components/GoogleMap'

export default {
  name: 'index-page',
  mixins: [IsDesktop],
  components: {
    Logo,
    VuetifyLogo,
    Carousel,
    PageList,
    Cooperator,
    GoogleMap,
  }
}
</script>
