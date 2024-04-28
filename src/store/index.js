import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      Tasks: [
        { id: 0, title: '1', compelete: false },
        { id: 1, title: '2', compelete: false },
        { id: 2, title: '3', compelete: false },
        { id: 3, title: '4', compelete: false },
        { id: 4, title: '5', compelete: false },
      ],
      DoneTasks: [
        { id: 0, title: 'To study React fundamentals', compelete: true },
      ],
    }
  },
  mutations: {
    AddTask(state, payload) {
      if (!payload) {
        state.Tasks.push(payload)
      }
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
  },
})

export default store
