<template>
  <div class="photo-gallery">
    <v-container>
      <v-layout wrap>
        <v-flex xs12 md4 pa-3 v-for="(photo, index) in get_Photos" :key="index">
          <v-card>
            <img class="white--text" :src="photo.url" width="100%"/>
            <v-card-title>
              <div>
                <span class="subheading">{{photo.text}}</span>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import IsDesktop from '~/components/mixins/IsDesktop'
export default {
  name: 'photo-gallery',
  mixins: [IsDesktop],
  computed: {
    ...mapGetters({
      get_Photos: 'gallery/get_Photos'
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
