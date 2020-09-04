<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName()">change my name</button>
    <p>My name is {{ name }}</p>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <!-- <app-user-detail v-bind:name="name"></app-user-detail> -->
        <app-user-detail
          :name="name"
          @nameWasReseted="name = $event"
          :resetFn="resetName"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data: function () {
    return { name: "Max" };
  },
  methods: {
    changeName() {
      let that = this;
      that.name = "Xavier";
    },
    resetName() {
      let that = this;
      that.name = "Max";
    },
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit,
  },
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
