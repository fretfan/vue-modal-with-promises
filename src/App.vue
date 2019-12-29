<template>
  <div id="app">
    <Alert />
    <b-button @click="showModal">Show modal</b-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Alert from "./Alert.vue";
import ShowAlertModal from "./components/ShowAlertModal.vue";
import mixins from "vue-typed-mixins";

export default mixins(ShowAlertModal).extend({
  name: "app",
  // extends: ShowAlertModal,

  components: {
    Alert
  },
  methods: {
    async showModal() {
      const result = await this.showYesNo("Alo 111");
      console.log(result);
      if (result === "yes") {
        const res2 = await this.showYesNo("Alo 222: on yes");
        console.log(res2);
        if (res2 === "yes") {
          console.log("done");
        }
      } else if (result === "no") {
        const res2 = await this.showYesNo("Alo 222: on no");
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
