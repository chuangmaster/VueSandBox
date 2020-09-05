<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>My age is {{ showAge }}</p>
    <button @click="editAge">Edit age</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      age: this.userAge,
    };
  },
  props: ["userAge"],
  computed: {
    showAge() {
      let that = this;
      return that.age;
    },
  },
  methods: {
    editAge() {
      let that = this;
      //that.userAge = 30; //Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value.
      that.age = 30;
      that.$emit("wasEditedAge", that.age);
    },
  },
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
