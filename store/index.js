export const state = () => ({
  items: [],
  users: {},
  userItems: {},
})

export const getters = () => ({
  items: (state) => state.items,
  users: (state) => state.users,
  userItems: (state) => state.userItems,
})

export const mutations = () => ({
  setItems(state, { items }) {
    state.items = items
  },
  setUser(state, { user }) {
    state.user[user.id] = user
  },
  setUserItems(state, { user, items }) {
    state.userItems[user.id] = items
  },
})

export const actions = () => ({
  async fetchItems({ commit }) {
    const items = await this.$axios.$get(
      'https://qiita.com/api/v2/items?query=tag:nuxt.js'
    )
    commit('setItems', { items })
  },
  async fetchUserInfo({ commit }, { id }) {
    const [user, items] = await Promise.all([
      this.$axios.$get(`https://qiita.com/api/v2/users/${id}`),
      this.$axios.$get(`https://qiita.com/api/v2/items?query=user:${id}`),
    ])
    commit('setUser', { user })
    commit('setUserItems', { user, items })
  },
})
