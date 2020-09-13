import Vue from "vue";
import App from "./App.vue";
export const eventBus = new Vue({
  methods: {
    checkDetails(server) {
      this.$emit("wasShowedDetails", server);
    },
  },
});
new Vue({
  el: "#app",
  render: (h) => h(App),
});
