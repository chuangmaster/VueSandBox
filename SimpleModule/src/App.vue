<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="componentName = 'appQuote'">appQuote</button>
        <button @click="componentName = 'appNew'">appNew</button>
        <button @click="componentName = 'appAuthor'">appAuthor</button>
        <p>{{ componentName }}</p>
        <hr />
        <keep-alive>
          <component :is="componentName"><p>default content</p></component>
        </keep-alive>
        <!-- if you dont put component tag in keep-alive tag, it will be destroyed when switch component-->
        <!-- <component :is="componentName"><p>default content</p></component> -->
        <!-- <appQuote>
          <h1 slot="title">A wonderful Quote!</h1>
          <p>A wonderful Quote!</p>
        </appQuote> -->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quotes.vue";
import New from "./components/New.vue";
import Author from "./components/Author.vue";

export default {
  data: function () {
    return {
      componentName: "appQuote",
    };
  },
  components: {
    appQuote: Quote,
    appNew: New,
    appAuthor: Author,
  },
};
</script>

<style></style>
