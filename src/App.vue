<template>
  <div class="Home m-5" color-schema="isDark?'dark':'light'">
    <div class="container p-2">
      <div class="text-center rounded mx-auto my-5">
        <!--icons-->
        <div class="d-flex justify-content-between">
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

          <div class="filter d-flex align-items- p-3 rounded-pill">
            <label>
              <input
                type="radio"
                value="uncommpelet"
                v-model="selectedOption"
              />
              Show Tasks
            </label>
            <label>
              <input type="radio" value="compelete" v-model="selectedOption" />
              Show Done Tasks
            </label>
            <label>
              <input type="radio" value="both" v-model="selectedOption" /> Show
              Show Both
            </label>
          </div>

          
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
        <TasksList
          v-if="selectedOption === 'uncommpelet' || selectedOption === 'both'"
        />
        <!--List of uncomplete Tasks-->

        <!--List of complete Tasks-->
        <DoneList
          v-if="selectedOption === 'compelete' || selectedOption === 'both'"
        />
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
import { useDark, useToggle } from '@vueuse/core'
export default {
  name: 'App',
  components: {
    TasksList,
    DoneList,
  },

  setup() {
    const store = useStore()
    const Task = ref('')
    const selectedOption = ref('both')
 
 

    const isDark = useDark({
      selector: 'body',
      attribute: 'color-schema',
      valueDark: 'dark',
      valueLight: 'light',
    })

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

    function toggleMode() {
      store.commit('toggleDarkMode')
      useToggle(isDark)()
    }

    return {
      Task,
      AddTask,
      toggleMode,
      Mood,
      selectedOption,
     
    }
  },
}
</script>

<style lang="scss">
[color-schema='dark'] {
  background-color: rgba(30, 30, 30, 0.5);
}
[color-schema='light'] {
  background-color: #fff;
}
</style>
