<template>
  <div id="app">
    <Alert />
    <b-button @click="showModal3">Show modal</b-button>
    <b-button @click="showSeries">Show modals promised</b-button>
    <b-button @click="showSeriesModalWithCallbacks"
      >Show modals callbacks</b-button
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Alert from "./Alert.vue";
import ShowAlertModal from "./components/ShowAlertModal.vue";
import mixins from "vue-typed-mixins";
import { showYesNoModal, showInfoModal } from "./alertModal1";

export default mixins(ShowAlertModal).extend({
  name: "app",
  // extends: ShowAlertModal,

  components: {
    Alert
  },
  methods: {
    async showSeries() {
      const messages = ["111", "222", "333"];
      for (const msg of messages) {
        const res = await showYesNoModal(msg);
        if (res === "no") {
          break;
        }
      }
    },
    showSeriesModalWithCallbacks() {
      const messages = ["111", "222", "333"];
      this.showSeriesCallbacks(messages, () => {
        console.log("finished");
      });
    },
    showSeriesCallbacks(messages: any, callback: any) {
      if (messages.length > 0) {
        const el = messages.shift() as string;
        const cb = (msg: any, cback: any) => {
          cback(msg, ()=>console.log('ad'));
          this.showSeriesCallbacks(msg, cback);
        };
        showYesNoModal(el, cb as any);
      }

      /*
      showYesNoModal("111", () => {
        showYesNoModal("222-yes", () => {
          showYesNoModal("333-yes", () => {
            console.log("finished");
          });
        });
      });
*/
    },
    async showModal3() {
      const res = await showYesNoModal(
        "111",
        () => console.log("Alo yes"),
        () => console.log("Alo no")
      );
      console.log(res);
    },
    async showModal() {
      const result = await showYesNoModal("Alo 111");
      console.log(result);
      if (result === "no") {
        const res2 = await showInfoModal("Alo 222: on yes");
        console.log(res2);
      }
      //   if (res2 === "yes") {
      //     console.log("done");
      //   }
      // } else if (result === "no") {
      //   const res2 = await this.showYesNo("Alo 222: on no");
      //   console.log(res2);
      // }
      console.log("should execute last");
    },
    async showModal2() {
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
