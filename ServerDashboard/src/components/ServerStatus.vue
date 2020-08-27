<template>
  <div class="server-status">
    <div>
      Server Status: <span class="text-danger">{{ Status }}</span>
    </div>
    <button class="btn btn-sm btn-outline-primary" @click="changeStatus()">
      Switch
    </button>
  </div>
</template>
<script>
//shared data
var data = {
  Status: 'OFF',
};
export default {
  data() {
    return {
      Status: 'OFF',
    };
  },
  methods: {
    changeStatus() {
      let that = this;
      that.Status = that.Status == 'ON' ? 'OFF' : 'ON';
    },
  },
};
</script>
