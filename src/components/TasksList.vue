<template>
  <div class="Tasks py-2">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="text-start mb-2">Tasks to do - {{ TaskList.length }}</h5>
      <div class="Sort d-flex align-items- p-3 rounded-pill">
        <label>
          <input
            type="radio"
            value="alpha"
            v-model="sortBy"
            @click="sortByTitle"
          />
          Sort Alphabetically
          <input
            type="radio"
            value="numeric"
            v-model="sortBy"
            @click="sortByNumeric"
          />
          Sort Numerically
        </label>
      </div>
    </div>
    <SingleTask
      v-for="(n, i) in TaskList"
      :key="n"
      :title="TaskList[i].title"
      :compelete="TaskList[i].compelete"
      :id="TaskList[i].id"
    />
  </div>
</template>

<script>
import SingleTask from './SinlgeTask.vue'

import { useStore } from 'vuex'
import { computed, ref } from 'vue'
export default {
  components: {
    SingleTask,
  },
  setup() {
    const store = useStore()
    const TaskList = computed(() => {
      return store.state.Tasks
    })
    const sortBy = ref('alpha')

    console.log(sortBy.value)

    const sortByTitle = () => {
      store.commit('sortByTitle')
    }

    const sortByNumeric = () => {
      store.commit('sortByNumeric')
    }
    return { TaskList, sortBy, sortByTitle, sortByNumeric }
  },
}
</script>

<style lang="scss">
.task {
  background-color: #15101c;
  color: #9e78cf;
}
</style>
