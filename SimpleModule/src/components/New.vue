<template>
  <div>
    <h1>The New</h1>
    <p>{{ counter }}</p>
    <hr />
    <button @click="counter++">add</button>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      counter: 0,
    };
  },
  deactivated() {
    console.log("deactivated");
  },
  activated() {
    console.log("activated");
  },
};
</script>
<style scoped></style>
