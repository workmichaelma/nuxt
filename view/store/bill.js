import Vue from 'vue'

export const state = () => ({
  Job: {
    label: '工程單價 (港幣)',
    bills: [
      {
        title: '清泥頭每車(6也車)',
        subtitle: '包括工人上樓清理及運費,香港,九龍,新界各區',
        price: '850'
      },
      {
        title: '清泥頭每車(4也車)',
        subtitle: '包括工人上樓清理及運費,香港,九龍,新界各區',
        price: '750'
      },
      {
        title: '清垃圾每車(6也車)',
        subtitle: '包括工人上樓清理及運費,香港,力龍,新界各區',
        price: '850'
      },
      {
        title: '清垃圾每車(4也車)',
        subtitle: '包括工人上樓清理及運費,香港,力龍,新界各區',
        price: '750'
      },
      {
        title: '清拆單如磚牆(4寸牆)',
        subtitle: '每井',
        price: '650'
      },
      {
        title: '清拆6寸磚牆',
        subtitle: '每井',
        price: '750'
      },
      {
        title: '清拆9寸磚牆',
        subtitle: '每井',
        price: '850'
      },
      {
        title: '清拆6寸石屎牆',
        subtitle: '每井',
        price: '950'
      },
      {
        title: '清拆地台',
        subtitle: '每井',
        price: '850'
      },
      {
        title: '清拆牆身亙仔',
        subtitle: '每井',
        price: '850'
      },
      {
        title: '清拆外牆紙皮石,或批盪',
        subtitle: '每井',
        price: '850'
      }
    ]
  },
  Material: {
    label: '材料單價 (港幣)',
    bills: [
      {
        title: '紅磚',
        subtitle: '每個',
        price: '1.8'
      },
      {
        title: '沙磚',
        subtitle: '每個',
        price: '1.8'
      },
      {
        title: '英泥(各項牌子)',
        subtitle: '每包',
        price: '38'
      },
      {
        title: '白灰',
        subtitle: '每包',
        price: '18'
      },
      {
        title: '海沙',
        subtitle: '包也',
        price: '230'
      },
      {
        title: '日本白英泥',
        subtitle: '每包',
        price: '850'
      },
    ]
  }
})

export const actions = {
}

export const getters = {
  get_Bill: state => type => {
    return state[type]
  }
}

export const mutations = {
}
