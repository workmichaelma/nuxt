<template>
  <div class="index-page">
    <carousel/>
    <page-list/>
    <cooperator/>
    <google-map/>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Carousel from '~/components/Index/Carousel'
import PageList from '~/components/Index/PageList'
import Cooperator from '~/components/Index/Cooperator'
import GoogleMap from '~/components/GoogleMap'

export default {
  name: 'index-page',
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
