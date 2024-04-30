<template>
  <div
    v-if="!compelete"
    class="task p-4 ms-lg-4 ms-0 my-3 d-flex justify-content-between align-items-center rounded flex-column flex-lg-row"
  >
    <p class="m-0 my-3 my-lg-0">{{ title }}</p>
    <div class="icons">
      <font-awesome-icon icon="check" class="me-3 x" @click="TaskIsDone" />
      <font-awesome-icon icon="trash" class="x" @click="RemoveTask" />
    </div>
  </div>

  <div
    v-else
    class="Donetask p-4 ms-lg-4 ms-0 my-3 d-flex justify-content-between align-items-center rounded flex-column flex-lg-row"
  >
    <p class="m-0 my-3 my-lg-0 text-decoration-line-through">
      {{ title }}
    </p>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  components: {},
  props: {
    title: String,
    compelete: Boolean,
    id: Number,
  },
  setup(props) {
    const store = useStore()

    function RemoveTask() {
      store.commit('DeleteTask', props.id)
    }
    function TaskIsDone() {
      store.commit('TaskIsDone', props.id)
    }

    return {
      RemoveTask,
      TaskIsDone,
    }
  },
}
</script>

<style lang="scss">

</style>
