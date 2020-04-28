export const state = () => ({
  apple: 150,
  total: 1,
  tax: 1.08,
  stock: true
})

export const getters = {
  appleIncludesTax: (state) => state.apple * 1.08,
  totalAppleIncludesTax: (state) =>
    Math.floor(state.apple * state.total * state.tax)
}

export const mutations = {
  incrementApple: (state) => state.total++,
  changeStock: (state) => (state.stock = false)
}

export const actions = {
  checkStock: ({ commit }) => {
    setTimeout(() => {
      commit('changeStock')
    }, 8000)
  }
}
