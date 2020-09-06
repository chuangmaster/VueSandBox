<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <appQuote></appQuote>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quotes.vue";
export default {
  components: {
    appQuote: Quote,
  },
};
</script>

<style></style>
