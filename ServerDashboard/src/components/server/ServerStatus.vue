<template>
  <div class="server-status">
    <div class="server-item">
      Server Status:
      <span class="text-danger">{{ Status }}</span>
    </div>
    <button class="btn btn-sm btn-outline-primary" @click="changeStatus()">Switch</button>
  </div>
</template>
<script>
//shared data
var data = {
  Status: "OFF"
};
export default {
  data() {
    return {
      Status: "OFF"
    };
  },
  methods: {
    changeStatus() {
      let that = this;
      that.Status = that.Status == "ON" ? "OFF" : "ON";
    }
  }
};
</script>
<style scoped>
div {
  border: 2px solid gray;
}
div .server-item {
  border: 1px solid red;
}
</style>