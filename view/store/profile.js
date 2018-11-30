import Vue from 'vue'

export const state = () => ({
  CompanyName: '建平清拆工程有限公司',
  AboutUs: `本公司專業清拆各項工程,包括室內裝修,樓廠,寫字樓,舊樓,招牌,花蘢,鐵閣仔,清拆磚牆,石屎牆,牆身瓦仔,石屎地台,外牆紙皮石,批盪,清理各項裝修地盤,建築地盤,泥頭垃圾,各大小泥頭車,夾斗車,吊車,及各項地盤機械,如推土機,山貓機,風機,油壓炮,出租及包機手操作. <br/> <br/> 本公司以工作確實,與人和善,合理價錢的原則下與客戶建立往來的良好關係,不管客戶的要求是如何,我們都是以您們的要求作為第一優先處理,無論您們的需求是如何,我們都竭誠希望您與我們聯絡,以便能給您提供最佳的服務. <br/> <br/> 本公司為您提供現場免費報價服務,所有落單之材料及工程都無需預付訂金,直至所有工程完成,客戶滿意才付款. <br/> <br/> 凡於本公司有開設戶口,所有材料及工程費均有一個月免息期結數`,
  Contact: {
    whatsapp: 85298286831,
    email: 'lamchuchu@gmail.com',
    facebook: 'https://www.facebook.com/chu.lam1',
    phone: 85223932835
  },
  Address: '又一村大坑東道12號路德會協同中學',
  Openhour: '星期一至五 上午7:55 至 下午3:45'
})

export const actions = {
  // update_isDesktop({ dispatch, commit }, v) {
  //   commit('set_isDesktop', v)
  // }
}

export const getters = {
  get_Profile: state => (item = null) => {
    return state[item]
  },
  get_contactPath: state => (key = null) => {
    let url = ''
    switch (key) {
      case 'whatsapp':
        url = `https://api.whatsapp.com/send?phone=${state.Contact.whatsapp}&text=你好！`
        break
      case 'phone':
        url = `tel: ${state.Contact.phone}`
        break
      case 'email':
        url = `mailto:${state.Contact.email}?Subject=你好!`
        break
      case 'facebook':
        url = `${state.Contact.facebook}`
        break
      default:
        break
    }
    return url
  }
}

export const mutations = {
  // set_isDesktop: (state, v) => {
  //   state.isDesktop = v
  // }
}
