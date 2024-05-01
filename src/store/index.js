import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      Tasks: [],
      DoneTasks: [],
      darkMode: false,
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

    sortByTitle(state) {
      state.Tasks.sort((a, b) => {
        const titleA = a.title.toLowerCase()
        const titleB = b.title.toLowerCase()
        if (titleA < titleB) {
          return -1
        }
        if (titleA > titleB) {
          return 1
        }
        return 0
      })
    },

    sortByNumeric(state) {
      console.log('this from  vuex')
      state.Tasks.sort((a, b) => {
        const numA = parseFloat(a.title)
        const numB = parseFloat(b.title)
        return numA - numB
      })
    },
  },

  plugins: [createPersistedState()],
})

export default store
