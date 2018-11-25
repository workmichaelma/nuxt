import Vue from 'vue'

export const state = () => ({
  cooperators: [
    {
      label: '麥當勞',
      icon: 'https://www.lgstatic.com/thumbnail_300x300/i/image3/M00/21/97/Cgq2xlqT31CAdKz1AABtuAjQt7k927.jpg'
    },
    {
      label: 'KFC',
      icon: 'https://png.pngtree.com/element_origin_min_pic/17/09/17/5136a6ab80303f0043c34ce95fe6ce6f.jpg'
    },
    {
      label: '百佳超級市場',
      icon: 'https://www.lgstatic.com/thumbnail_300x300/image1/M00/00/1C/CgYXBlTUWF6AX3xbAABOvYE09ss322.jpg'
    },
    {
      label: 'OK便利店',
      icon: 'http://58.61.218.225/upload/pic/storeImage/201303/oklogo.jpg'
    },
    {
      label: '貢茶',
      icon: 'https://pbs.twimg.com/profile_images/825218217756938240/iG9uQ_Vz_400x400.jpg'
    },
    {
      label: '7-11',
      icon: 'https://www.delpoplumbinghvac.com/wp-content/uploads/7-11-logo.png'
    }
  ]
})

export const actions = {
}

export const getters = {
  get_cooperators: state => () => {
    return state.cooperators
  }
}

export const mutations = {
}
