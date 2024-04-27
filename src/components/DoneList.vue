<template>
  <div class="DoneTasks py-2">
    <h5 class="text-start mb-2">Done - 1</h5>
    <div
      class="Donetask p-4 ms-lg-4 ms-0 my-3 d-flex justify-content-between align-items-center rounded flex-column flex-lg-row"
    >
      <p class="m-0 my-3 my-lg-0 text-decoration-line-through">
        To study React fundamentals
      </p>
    </div>
  </div>
</template>

<script>
export default {}
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
