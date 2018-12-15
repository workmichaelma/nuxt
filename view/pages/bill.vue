<template>
  <div class="bill">
    <div class="cover-background"></div>
    <v-container class="bill__list">
      <v-flex class="headline text-xs-center" pb-4>工程報價</v-flex>
      <job-list :bills="job" color="#fbfbe4"/>
      <job-list :bills="material" color="#e4ecfb"/>
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import IsDesktop from '~/components/mixins/IsDesktop'
import JobList from '~/components/Bill/JobList'
export default {
  name: 'bill',
  mixins: [IsDesktop],
  computed: {
    ...mapGetters({
      get_Bill: 'bill/get_Bill'
    }),
    job () {
      return this.get_Bill('Job')
    },
    material () {
      return this.get_Bill('Material')
    },
  },
  data: () => ({
    
  }),
  methods: {
  },
  components: {
    JobList
  }
}
</script>
<style lang="stylus" scoped>
@import '~assets/style/app.styl'
.bill
  .cover-background
    background-image url('https://wallpaperplay.com/walls/full/f/f/5/177539.jpg')
    background-size cover
    background-position top
    >>> .container
      padding-top 0
      padding-bottom 0
  +desktop()
    .cover-background
      height 540px
    &__list
      margin-top -200px

  +mobile()
    .cover-background
      height 270px
    &__list
      margin-top -100px
</style>
