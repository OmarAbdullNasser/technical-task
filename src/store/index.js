import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      Tasks: [],
      DoneTasks: [],
      darkMode: false,
      sortBy: 'alpha',
    }
  },
  mutations: {
    AddTask(state, payload) {
      state.Tasks.push(payload)
    },

    DeleteTask(state, id) {
      let index = state.Tasks.findIndex(task => task.id == id)
      state.Tasks.splice(index, 1)
    },
    TaskIsDone(state, id) {
      let DoneTask = state.Tasks.find(task => task.id == id)
      DoneTask.compelete = true
      state.DoneTasks.push(DoneTask)
      this.commit('DeleteTask', id)
    },

    toggleDarkMode(state) {
      state.darkMode = !state.darkMode
    },
  },

  plugins: [createPersistedState()],
})

export default store
