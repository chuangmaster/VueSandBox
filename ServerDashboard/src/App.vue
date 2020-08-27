<template>
  <div class="container">
    <app-header></app-header>
    <hr />
    <div class="row">
      <app-servers></app-servers>
      <app-server-details></app-server-details>
    </div>
    <hr />
    <app-footer></app-footer>
  </div>
</template>

<script>
import Vue from 'vue';
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
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import ServerDetails from './components/ServerDetails.vue';
import Servers from './components/Servers.vue';
export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-server-details': ServerDetails,
    'app-servers': Servers,
  },
};
</script>

<style></style>
