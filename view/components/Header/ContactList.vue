<template>
  <v-layout class="contact-list" align-center>
    <v-flex class="contact-list__item" v-for="(v, name) in contact" :key="name">
      <a :href="connect(name)" target="_blank">
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
      get_contact: 'contact/get_contact'
    }),
    contact () {
      return this.get_contact()
    }
  },
  methods: {
    connect: function (name) {
      let url = ''
      let self = this
      switch (name) {
        case 'whatsapp':
          url = `https://api.whatsapp.com/send?phone=${self.contact.whatsapp}&text=你好！`
          break
        case 'phone':
          url = `tel: ${this.contact.phone}`
          break
        case 'email':
          url = `mailto:${this.contact.email}?Subject=你好!`
          break
        case 'facebook':
          url = `${this.contact.facebook}`
          break
        default:
          break
      }
      return url
    }
  }
}
</script>

<style lang="stylus" scoped>
.contact-list
  flex-grow 0 !important
  &__item
    width 40px
    height 40px
    max-width 40px
    margin 0 5px
    border-radius 50%
    box-shadow 1px 2px 4px 0px #1b1313a6
    img
      width 100%
      height 100%
</style>


