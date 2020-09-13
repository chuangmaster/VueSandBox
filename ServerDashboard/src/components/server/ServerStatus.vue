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
    <!-- <button @click="$emit('showDetail', server)">check</button> -->
    <!-- use event bus -->
    <button @click="checkDetails()">Check by event bus</button>
  </div>
</template>
<script>
import { eventBus } from "../../main.js";
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
    checkDetails() {
      let that = this;
      // eventBus.$emit("checkDetails", that.server);
      eventBus.checkDetails(that.server);
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
