<template>
  <div class="DoneTasks py-2">
    <h5 class="text-start mb-2">Done - {{ DoneList.length }}</h5>
    <SingleTask
      v-for="(n, i) in DoneList"
      :key="n"
      :title="DoneList[i].title"
      :compelete="DoneList[i].compelete"
    />
  </div>
</template>

<script>
import SingleTask from './SinlgeTask.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  components: {
    SingleTask,
  },
  props: ['DoneTasks'],
  setup() {
    const store = useStore()
    const DoneList = computed(() => {
      return store.state.DoneTasks
    })

    return { DoneList }
  },
}
</script>

<style lang="scss">
.DoneTasks {
  color: #78cfb0;
  .Donetask {
    background-color: #15101c;
    color: inherit;
  }
}
</style>
