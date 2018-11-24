<template>
  <div class="page-list">
    <v-card flat>
      <v-layout align-center justify-center>
        <v-flex shrink>
          <v-btn fab flat @click="prev" light v-bind="size" class="direction-btn">
            <v-icon light v-bind="size">keyboard_arrow_left</v-icon>
          </v-btn>
        </v-flex>
        <v-flex grow>
          <v-window v-model="onboarding">
            <v-window-item v-for="n in swiperLength" :key="`card-${n}`">
              <v-card color="transparent" :height="cardHeight" flat>
                <v-layout align-center justify-center fill-height tag="v-card-text">
                  <v-flex class="page-list__item" v-for="(page, i) in getCardItems(n)" :key="i" xs4 fill-height>
                    <v-card class="fill-height">
                      <nuxt-link :to="page.path">
                        <v-layout column fill-height justify-space-around align-center large>
                          <v-btn fab depressed ripple color="grey lighten-3" v-bind="size">
                            <v-icon v-bind="size">{{page.icon}}</v-icon>
                          </v-btn>
                          <div class="label">{{ page.label }}</div>
                        </v-layout>
                      </nuxt-link>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-window-item>
          </v-window>
        </v-flex>
        <v-flex shrink>
          <v-btn fab flat @click="next" light v-bind="size" class="direction-btn">
            <v-icon light v-bind="size">keyboard_arrow_right</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import IsDesktop from '~/components/mixins/IsDesktop'
export default {
  name: 'page-list',
  mixins: [IsDesktop],
  computed: {
    ...mapGetters({
      get_pages: 'pages/get_pages'
    }),
    pages () {
      return this.get_pages()
    },
    swiperLength () {
      return Object.keys(this.pages).length / this.itemPerSlide
    },
    cardHeight () {
      return this.isDesktop ? 300 : 150
    },
    size () {
      return {
        small: !this.isDesktop,
        large: this.isDesktop
      }
    }
  },
  data: () => ({
    itemPerSlide: 3,
    onboarding: 0
  }),
  methods: {
    getCardItems (cardNo) {
      let items = []
      const from = ((cardNo - 1) * this.itemPerSlide)
      const to = from + this.swiperLength
      for (var i = from; i <= to; i++) {
        items.push(this.pages[i])
      }
      return items
    },
    next () {
      this.onboarding = this.onboarding + 1 === this.swiperLength
        ? 0
        : this.onboarding + 1
    },
    prev () {
      this.onboarding = this.onboarding - 1 < 0
        ? this.length - 1
        : this.onboarding - 1
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~assets/style/app.styl'
a 
  text-decoration none
.direction-btn
  padding 0
  min-width fit-content
.page-list
  margin 0 auto
  &__item
    margin 0 2.5%
    max-width 250px
    &:hover
      .v-card
        background-color rgba(255, 247, 230, 0.5)
    .label
      font-weight bold
  +desktop()
    max-width 1264px
    padding 50px 0
    &__item
      .label
        font-size 20px
  +mobile()
    max-width 480px
    padding 25px 0
    &__item
      .label
        font-size 12px
</style>


