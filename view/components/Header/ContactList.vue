<template>
  <v-layout class="contact-list" align-center>
    <v-flex class="contact-list__item" v-for="(v, name) in contact" :key="name">
      <a :href="get_contactPath(name)" target="_blank">
        <img :src="require(`~/assets/images/${name}.png`)"/>
      </a>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'contact-list',
  computed: {
    ...mapGetters({
      get_contact: 'contact/get_contact',
      get_contactPath: 'contact/get_contactPath'
    }),
    contact () {
      return this.get_contact()
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/style/app.styl'
.contact-list
  flex-grow 0 !important
  &__item
    margin 0 5px
    border-radius 50%
    filter drop-shadow(1px 1px 2px #aaa)
    img
      width 100%
      height 100%
  +desktop()
    &__item
      width 40px
      height 40px
      max-width 40px
  +mobile()
    &__item
      width 30px
      height 30px
      max-width 30px
</style>


