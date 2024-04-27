<template>
  <div class="Tasks py-2">
    <h5 class="text-start mb-2">Tasks to do - {{ Tasks.length }}</h5>
    <SingleTask
      v-for="(n, i) in Tasks"
      :key="n"
      :title="Tasks[i].title"
      :compelete="Tasks[i].compelete"
    />
  </div>
</template>

<script>
import SingleTask from './SinlgeTask.vue'
// import { ref } from 'vue'

export default {
  components: {
    SingleTask,
  },
  props: ['Tasks'],
  setup() {
    return {}
  },
}
</script>

<style lang="scss">
.task {
  background-color: #15101c;
  color: #9e78cf;
}
</style>
