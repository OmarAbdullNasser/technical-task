<template>
  <div class="Home m-5">
    <div class="container p-2">
      <div class="text-center rounded mx-auto my-5">
        <!--icons-->
        <div
          class="Controllers rounded-pill"
          :class="{ 'text-end': Mood, 'text-start': !Mood }"
        >
          <button type="button" class="btn" v-if="!Mood" @click="toggleMode">
            <font-awesome-icon icon="moon" />
          </button>

          <button type="button" class="btn" v-else @click="toggleMode">
            <font-awesome-icon icon="sun" />
          </button>
        </div>
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
import { ref, computed } from 'vue'
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

    const Mood = computed(() => {
      return store.state.darkMode
    })

    function AddTask() {
      if (Task.value != '' || undefined) {
        store.commit('AddTask', {
          title: Task.value.toString(),
          compelete: false,
        })
      }
      Task.value = ''
    }

    const toggleMode = () => {
      store.commit('toggleDarkMode')
    }
    return {
      Task,
      AddTask,
      toggleMode,
      Mood,
    }
  },
}
</script>

<style lang="scss"></style>
