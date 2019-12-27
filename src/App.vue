<template>
  <div id="app">
    <Alert />
    <b-button @click="showModal">Show modal</b-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Alert from "./Alert.vue";
import { modalMixin } from "./modalMixin";

export default Vue.extend({
  name: "app",
  mixins: [modalMixin],
  components: {
    Alert
  },
  methods: {
    async showModal() {
      // todo fix with vue-typed-mixins
      // @ts-ignore
      const result = await this.showYesNo("Alo 111", this);
      console.log(result);
      if (result === "yes") {
        // @ts-ignore
        const res2 = await this.showYesNo("Alo 222: on yes", this);
        console.log(res2);
        if (res2 === "yes") {
          console.log("done");
        }
      } else if (result === "no") {
        // @ts-ignore
        const res2 = await this.showYesNo("Alo 222: on no", this);
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
