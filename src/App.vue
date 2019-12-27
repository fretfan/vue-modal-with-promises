<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <Alert />
    <b-button @click="showModal">Show modal</b-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Alert from "./Alert.vue";
import { showYesNo } from "./alert";

export default Vue.extend({
  name: "app",
  components: {
    Alert
  },
  methods: {
    showModal() {
      const call3 = () => {
        console.log("call3");
      };
      const call2 = () => showYesNo("Alo 222", call3);
      showYesNo("Alo 111", call2);
    }
  }
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
