<template>
  <div>hi</div>
  <!-- <div class="contact-box lime lighten-5">
    <v-container>
      <v-layout wrap>
        <v-flex xs12 md5>
          <google-map/>
        </v-flex>
        <v-flex xs12 offset-md1 md5>
          <div class="slogan text-xs-center">聯絡我們</div>
          <div class="contact-box__table">
            <v-list :two-line="isDesktop">
              <template v-for="(contact, i) in contacts">
                <v-list-tile :key="i">
                  <v-list-tile-action>
                    <v-icon color="indigo">{{ contact.type }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title class="contact-box__table__title">{{ contact.data }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-divider inset v-if="i < contacts.length - 1" :key="`divider-${i}`"></v-divider>
              </template>
            </v-list>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div> -->
</template>
<script>
// import { mapGetters } from 'vuex';
// import find from 'lodash/find'
// import IsDesktop from '~/components/mixins/IsDesktop'
// import GoogleMap from '~/components/GoogleMap'
// export default {
//   name: 'contact-box',
//   mixins: [IsDesktop],
//   computed: {
//     ...mapGetters({
//       get_Profile: 'profile/get_Profile',
//     }),
//     contacts () {
//       const contact = this.get_Profile('Contact')
//       return [
//         {
//           type: 'phone',
//           data: contact.phone
//         },
//         {
//           type: 'email',
//           data: contact.email
//         },
//         {
//           type: 'place',
//           data: this.get_Profile('Address')
//         },
//         {
//           type: 'access_time',
//           data: this.get_Profile('Openhour')
//         }
//       ]
//     }
//   },
//   components: {
//     GoogleMap
//   },
//   data: () => ({
    
//   }),
//   methods: {
//   }
// }
</script>
<style lang="stylus" scoped>
// @import '~assets/style/app.styl'
// .contact-box
//   padding-bottom 32px
//   .slogan
//     font-weight bold
//     margin-bottom 10px
//   &__table
//     border-color #3f51b5
//     border-style solid
//     box-shadow 1px 1px 6px #3f51b5
//   +desktop()
//     .slogan
//       font-size 24px
//     &__table
//       border-width 3px
//   +mobile()
//     .slogan
//       margin-top 20px
//       font-size 18px
//     &__table
//       border-width 2px
//       &__title
//         font-size 14px
</style>
