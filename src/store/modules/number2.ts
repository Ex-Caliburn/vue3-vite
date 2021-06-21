const defaultState = {
  count: 0
}
const state = defaultState

const mutations = {
  increment(state: typeof defaultState) {
    console.log('mutations increment')
    state.count++
  },
  decrement(state: typeof defaultState) {
    console.log('mutations increment')
    state.count--
  }
}

const actions = {
  increment(context) {
    console.log('actions increment')
    context.commit('increment')
  },
  decrement(context) {
    console.log('actions increment')
    context.commit('decrement')
  }
}

const getters = {
  double(state: typeof defaultState) {
    return 2 * state.count
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
