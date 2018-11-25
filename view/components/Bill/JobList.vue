<template>
  <div class="job-list" :style="colorStyle">
    <v-list subheader two-line :style="colorStyle">
      <v-subheader>{{ label }}</v-subheader>
      <template v-for="(bill, i) in items">
        <v-list-tile :key="i">
          <v-list-tile-content>
            <v-list-tile-title>{{ bill.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ bill.subtitle }}</v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            {{ bill.price }}
          </v-list-tile-action>
        </v-list-tile>
        <v-divider v-if="i < bills.length - 1" :key="`divider-${i}`"></v-divider>
      </template>
    </v-list>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import get from 'lodash/get'
import IsDesktop from '~/components/mixins/IsDesktop'
export default {
  name: 'job-list',
  mixins: [IsDesktop],
  props: ['bills', 'color'],
  computed: {
    ...mapGetters({
    }),
    label () {
      return get(this.bills, 'label', [])
    },
    items () {
      return get(this.bills, 'bills', [])
    },
    colorStyle () {
      return {
        'background-color': this.color
      }
    }
  },
  data: () => ({
    
  }),
  methods: {
  },
}
</script>
<style lang="stylus" scoped>
@import '~assets/style/app.styl'
.job-list
  padding 24px
  >>> .v-list
    background-color inherit
</style>
