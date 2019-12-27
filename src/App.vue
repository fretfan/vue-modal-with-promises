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
    async showModal() {
      const call2 = () => showYesNo("Alo 222", this);
      const result = await showYesNo("Alo 111", this);
      console.log(result);
      if (result === "yes") {
        const res2 = await showYesNo("Alo 222: on yes", this);
        console.log(res2);
        if (res2 === "yes") {
          console.log("done");
        }
      } else if (result === "no") {
        const res2 = await showYesNo("Alo 222: on no", this);
        console.log(res2);
      }
      console.log("should execute last");
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
