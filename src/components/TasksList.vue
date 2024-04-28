<template>
  <div class="Tasks py-2">
    <h5 class="text-start mb-2">Tasks to do - {{ TaskList.length }}</h5>
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
// import { ref } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  components: {
    SingleTask,
  },
  setup() {
    const store = useStore()
    const TaskList = computed(() => {
      return store.state.Tasks
    })

    return { TaskList }
  },
}
</script>

<style lang="scss">
.task {
  background-color: #15101c;
  color: #9e78cf;
}
</style>
