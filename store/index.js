export const state = () => ({
  locales: ['en', 'nl'],
  defaultLocale: 'en',
  locale: 'en',
  localePrefix: '',
  drawer: {
    left: false,
    right: false
  },
  components: {
    dynamic: {
      rightColumn: '',
      rightDrawer: '',
    },
    data: { } 
  },
  user: {
    loggedIn: false,
    isFresh: false,
  },
  admin: {
    loggedIn: false,
    isFresh: false,
    isSuperAdmin: false,
  },

})

export const mutations = {
  setLocale(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
        if(state.locale == state.defaultLocale) state.localePrefix = ''
        else state.localePrefix = '/'+state.locale
    }
  },
  showLeftDrawer(state) {
    state.drawer.left = true
  },
  hideLeftDrawer(state) {
    state.drawer.left = false
  },
  showRightDrawer(state) {
    state.drawer.right = true
  },
  hideRightDrawer(state) {
    state.drawer.right = false
  },
  toggleDrawer(state, side) {
    state.drawer[side] = !state.drawer[side]
  },
  setDynamicComponent(state, payload) {
    state.components.dynamic[payload.region] = payload.component
  },
  setComponentData(state, payload) {
    state.components.data[payload.source] = {}
    state.components.data[payload.source] = payload.data
  },
  setAdmin(state, payload) {
    state.admin = payload
  },
  setUser(state, payload) {
    state.admin = payload
  },
  setAccount(state, payload) {
    state.account = payload
  }
}

export const actions = {
  adminLogin( { commit }, payload) {
    payload.loggedIn = true
    payload.isFresh = true
    commit('setAdmin', payload)
  },
  userLogin( { commit }, payload) {
    payload.loggedIn = true
    payload.isFresh = true
    commit('setUser', payload)
  },
  ejectAccount( { commit }) {
  },
}
