import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks:[],
  },
  mutations: {
    Add(state, value) {
      state.tasks.push({
        id: Math.random(),
        text: value,
        checked: false,
      });
    },
    Delete(state, id){
      state.tasks = state.tasks.filter(i => i.id !== id)
    },
    Check(state, {id, checked}) {
      const i = state.tasks.findIndex(j => {
        return j.id === id
        });
        state.tasks[i].checked = checked;
    }
  },
  actions: {
  },
  modules: {
  }
})
