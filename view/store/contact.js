import Vue from 'vue'

export const state = () => ({
  // whatsapp: null,
  // email: null,
  // facebook: null,
  // phone: null
  whatsapp: 85298286831,
  email: 'lamchuchu@gmail.com',
  facebook: 'https://www.facebook.com/chu.lam1',
  phone: 85223932835
})

export const actions = {
  update_contact({ dispatch, commit }, { key, value }) {
    commit('set_contact', { key, value })
  }
}

export const getters = {
  get_contact: state => (key = null) => {
    return key ? state[key] : state
  }
}

export const mutations = {
  set_contact: (state, { key, value }) => {
    state[key] = value
  }
}
