<template>
  <div>
    <div>
      <slot name="title">
        <h1 id="title">{{ title }}</h1>
      </slot>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return { title: "I am a title" };
  },
};
</script>
<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px;
  text-align: center;
}
h1 {
  color: red;
}
</style>
