<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li class="list-group-item" v-for="(s, key) in servers" v-bind:key="key">
        <app-server-status
          :server="s"
          @showDetail="$emit('showDetail', $event)"
        ></app-server-status>
      </li>
    </ul>
  </div>
</template>
<script>
import ServerStatus from "./ServerStatus.vue";
export default {
  data: function () {
    return {
      servers: [
        {
          id: 1,
          status: "unknown",
        },
        {
          id: 2,
          status: "ON",
        },
        {
          id: 3,
          status: "OFF",
        },
        {
          id: 4,
          status: "unknown",
        },
        {
          id: 5,
          status: "unknown",
        },
      ],
    };
  },
  components: {
    "app-server-status": ServerStatus,
  },
};
</script>
