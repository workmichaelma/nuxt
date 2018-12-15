import Vue from 'vue'

export const state = () => ({
  photos: [
    {
      url: 'http://kinping23.com/photo/normal/normal_20120114_170855.jpg',
      text: '外牆搭棚'
    },
    {
      url: 'http://kinping23.com/photo/normal/normal_20130321_143557.jpg',
      text: '清除工程廢物'
    },
    {
      url: 'http://kinping23.com/photo/normal/normal_20140415_145404.jpg',
      text: '拆除廣告吊牌'
    },
    {
      url: 'http://kinping23.com/photo/normal/normal_IMAG0202.jpg',
      text: '清除大型固體廢物'
    },
    {
      url: 'http://kinping23.com/photo/normal/normal_IMAG0148.jpg',
      text: '報紙廣告'
    },
    {
      url: 'http://kinping23.com/photo/normal/normal_0127_113104.jpg',
      text: '泳池重修地面'
    }
  ],
  videos: [
    {
      url: 'https://www.youtube.com/watch?v=Pg4Dm28wsMs',
      text: '村屋吊運山貓過程'
    }
  ]
})

export const actions = {
}

export const getters = {
  get_Photos: state => {
    return state.photos
  },
  get_Videos: state => {
    return state.videos
  }
}

export const mutations = {
}
