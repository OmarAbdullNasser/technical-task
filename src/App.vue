<template>
  <div class="Home m-5">
    <div class="container p-2">
      <div class="text-center rounded mx-auto my-5">
        <!--Input Form-->
        <div
          class="TaskInput d-flex justify-content-between flex-wrap flex-lg-nowrap my-3"
        >
          <input
            type="text"
            placeholder="Add a new task"
            class="form-control me-lg-3 mb-3 mb-lg-0"
            v-model="Task"
          />
          <button type="button" class="btn flex-grow-1" @click="AddTask">
            <font-awesome-icon icon="plus" size="2x" />
          </button>
        </div>
        <!--Input Form-->

        <!--List of uncomplete Tasks-->
        <TasksList />
        <!--List of uncomplete Tasks-->

        <!--List of complete Tasks-->
        <DoneList />
        <!--List of complete Tasks-->
      </div>
    </div>
  </div>
</template>

<script>
import TasksList from './components/TasksList.vue'
import DoneList from './components/DoneList.vue'
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'App',
  components: {
    TasksList,
    DoneList,
  },

  setup() {
    const store = useStore()
    const Task = ref('')
    function AddTask() {
      if (Task.value != '' || undefined) {
        store.commit('AddTask', {
          title: Task.value.toString(),
          compelete: false,
        })
      }
      Task.value = ''
    }
    const x = computed(() => {
      return store.state.Tasks
    })

    localStorage.setItem('Tasks', JSON.stringify(x.value))

    watch(
      x,
      newValue => {
        localStorage.setItem('Tasks', JSON.stringify(newValue))
      },
      { deep: true },
    )
    return {
      Task,
      AddTask,
    }
  },
}
</script>

<style lang="scss">
body {
  background-color: rgba(30, 30, 30, 0.5) !important;
}
.Home {
  background-color: rgba(29, 24, 37, 1);
  color: white;
  .TaskInput {
    ::placeholder {
      color: #fff;
    }
    input {
      background-color: inherit;
      border-color: #9e78cf;
      color: #fff;
    }
    button {
      background-color: #9e78cf;
    }
  }
}
</style>
