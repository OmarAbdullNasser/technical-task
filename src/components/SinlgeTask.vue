<template>
  <div
    v-if="!compelete"
    class="task p-4 ms-lg-4 ms-0 my-3 d-flex justify-content-between align-items-center rounded flex-column flex-lg-row"
  >
    <p class="m-0 my-3 my-lg-0">{{ title }}</p>
    <div class="icons">
      <font-awesome-icon icon="check" class="me-3" />
      <font-awesome-icon icon="trash" />
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
export default {
  components: {},
  props: {
    title: String,
    compelete: Boolean,
  },
  setup() {
    // console.log(props.title, props.compelete)
  },
}
</script>

<style lang="scss">
.task {
  background-color: #15101c;
  color: #9e78cf;
}
.Donetask {
  background-color: #15101c;
  color: inherit;
}
</style>
