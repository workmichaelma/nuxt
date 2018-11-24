<template>
  <div class="cooperator">
    <v-container>
      <div class="slogan"><b>過往客戶</b></div>
      <v-layout class="cooperator__list" justify-space-between>
        <v-flex class="cooperator__list__item" v-for="(cooperator, i) in cooperators" :key="i" :xs4="!isDesktop" :md2="isDesktop" shrink>
          <img :src="cooperator.icon"/>
          <div class="label">{{ cooperator.label }}</div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import IsDesktop from '~/components/mixins/IsDesktop'
export default {
  name: 'cooperator',
  mixins: [IsDesktop],
  computed: {
    ...mapGetters({
      get_cooperators: 'cooperators/get_cooperators'
    }),
    cooperators () {
      const cooperators = this.get_cooperators()
      return this.isDesktop ? cooperators : [cooperators[0], cooperators[1], cooperators[2]]
    }
  },
  data: () => ({
    
  }),
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
@import '~assets/style/app.styl'
.cooperator
  background-color rgb(255, 252, 237)
  .slogan
    margin-bottom 10px
  &__list
    &__item
      flex-basis auto !important
      img
        width 100px
        height 100px

  +desktop()
    .container
      max-width 1264px
      .slogan
        font-size 18px

  +mobile()
    .container
      max-width 480px

</style>


