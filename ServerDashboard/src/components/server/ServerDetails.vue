<template>
  <div class="col-xs-12 col-sm-6">
    <p>Server Details are currently not updated</p>
    server id: {{ server.id }}
    <hr />
    server status: {{ server.status }}
  </div>
</template>
<script>
export default {
  data: function () {
    return { myServer: { id: "unknown", status: "unknown" } };
  },
  props: ["server"],
  created() {
    let that = this;
    that.$on("wasShowedDetails", (server) => {
      that.myServer = server;
    });
  },
};
</script>
<style scoped>
div {
  border: 2px solid blue;
}
</style>
