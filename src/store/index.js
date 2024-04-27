import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      Tasks: [
        { title: '1', compelete: false },
        { title: '2', compelete: false },
        { title: '3', compelete: false },
        { title: '4', compelete: false },
        { title: '5', compelete: false },
      ],
      DoneTasks: [{ title: 'To study React fundamentals', compelete: true }],
    }
  },
  mutations: {
    AddTask(state, payload) {
      console.log(payload)
      state.Tasks.push(payload)
    },
  },
})

export default store
