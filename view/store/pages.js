import Vue from 'vue'

export const state = () => ({
  pages: [
    {
      path: 'about-us',
      label: '關於我們',
      icon: 'info'
    },
    {
      path: 'bill',
      label: '工程報價',
      icon: 'settings'
    },
    // {
    //   path: 'job-bill',
    //   label: '工程單價',
    //   icon: 'build'
    // },
    {
      path: 'show-photo',
      label: '圖片庫',
      icon: 'image'
    },
    {
      path: 'show-video',
      label: '影片庫',
      icon: 'video_library'
    },
    // {
    //   path: 'contact-us',
    //   label: '聯絡我們',
    //   icon: 'contact_support'
    // }
  ]
})

export const actions = {
}

export const getters = {
  get_pages: state => () => {
    return state.pages
  }
}

export const mutations = {
}
