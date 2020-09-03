<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ exchangeName() }}</p>
    <button @click="reset">reset</button>
  </div>
</template>

<script>
export default {
  props: ["name"],
  methods: {
    exchangeName() {
      let that = this;
      return that.name.split("").reverse().join("");
    },
    reset() {
      let that = this;
      that.name = "Max";
      that.$emit("resetName", that.name);
    },
  },
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
