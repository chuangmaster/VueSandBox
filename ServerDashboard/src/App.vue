<template>
  <div class="container">
    <app-header></app-header>
    <hr />
    <div class="row">
      <app-servers @showDetail="showDetail($event)"></app-servers>
      <app-server-details :server="server"></app-server-details>
    </div>
    <hr />
    <app-footer></app-footer>
  </div>
</template>

<script>
import Vue from "vue";
// Vue.component('app-header', {
//   data: function () {
//     return {};
//   },
//   template:
//     "<div class='row'>  <div class='col-xs-12'>    <header>  <h1>Server Status</h1>     </header>    </div>  </div>",
// });
// Vue.component('app-server-details', {
//   template: `
//   <div class="col-xs-12 col-sm-6">
//     <p>Server Details are currently not updated</p>
//     </div>
//       `,
// });
// Vue.component('app-servers', {
//   template: `<div class="col-xs-12 col-sm-6">
//         <ul class="list-group">
//           <li class="list-group-item" v-for="index in 5">
//             Server #{{ index }}
//             </li>
//             </ul>
//             </div>`,
// });
// Vue.component('app-footer', {
//   template: `<div class="row">
//                 <div class="col-xs-12">
//                   <footer>
//                     <p>All Servers are managed here</p>
//                   </footer>
//                 </div>
//               </div>`,
// });
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";
import ServerDetails from "./components/server/ServerDetails.vue";
import Servers from "./components/server/Servers.vue";
export default {
  data() {
    return {
      server: { id: 0, status: "unknown" },
    };
  },
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-server-details": ServerDetails,
    "app-servers": Servers,
  },
  methods: {
    showDetail(server) {
      let that = this;
      that.server = server;
    },
  },
};
</script>

<style></style>
