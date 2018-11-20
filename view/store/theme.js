import Vue from 'vue'

export const state = () => ({
  isDesktop: false
})

export const actions = {
  update_isDesktop({ dispatch, commit }, v) {
    commit('set_isDesktop', v)
  }
}

export const getters = {
  get_isDesktop: state => {
    return state.isDesktop
  }
}

export const mutations = {
  set_isDesktop: (state, v) => {
    state.isDesktop = v
  }
}
