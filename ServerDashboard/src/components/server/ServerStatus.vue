<template>
  <div class="server-status">
    <div class="server-item">
      Id:
      <span>{{ server.id }}</span> <br />
      Server Status:
      <span class="text-danger">{{ status }}</span>
    </div>
    <button class="btn btn-sm btn-outline-primary" @click="changeStatus()">
      Switch
    </button>
    <button @click="$emit('showDetail', server)">check</button>
  </div>
</template>
<script>
export default {
  props: ["server"],
  data() {
    return {
      status: this.server.status,
    };
  },
  methods: {
    changeStatus() {
      let that = this;
      that.status = that.status == "ON" ? "OFF" : "ON";
      that.server.status = that.status;
    },
  },
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
