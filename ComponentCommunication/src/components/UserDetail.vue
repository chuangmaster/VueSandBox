<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ name }}</p>

    <p>Reverse User Name: {{ exchangeName() }}</p>
    <button @click="resetName">reset</button>
    <button @click="resetFn()">resetFn</button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    resetFn: Function,
  },
  methods: {
    exchangeName() {
      let that = this;
      return that.name.split("").reverse().join("");
    },
    resetName() {
      let that = this;
      that.name = "Max";
      that.$emit("nameWasReseted", that.name);
    },
  },
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
