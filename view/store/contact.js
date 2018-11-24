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
  },
  get_contactPath: state => (key = null) => {
    let url = ''
    switch (key) {
      case 'whatsapp':
        url = `https://api.whatsapp.com/send?phone=${state.whatsapp}&text=你好！`
        break
      case 'phone':
        url = `tel: ${state.phone}`
        break
      case 'email':
        url = `mailto:${state.email}?Subject=你好!`
        break
      case 'facebook':
        url = `${state.facebook}`
        break
      default:
        break
    }
    return url
  }
}

export const mutations = {
  set_contact: (state, { key, value }) => {
    state[key] = value
  }
}
