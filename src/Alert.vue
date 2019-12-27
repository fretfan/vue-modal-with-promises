<template>
  <b-modal
    id="yesNoModal"
    title="BootstrapVue"
    v-model="modalState.isShown"
    @hidden="runCallBack"
  >
    Modal message:
    <p>{{ modalState.message }}</p>
    <b-button @click="hideModal(modalState.yesCallBack)">Yes</b-button>
    <b-button>No</b-button>
  </b-modal>
</template>

<script lang="ts">
import Vue from "vue";
import { ModalState } from "./store/ModalState";

export default Vue.extend({
  data() {
    return {
      callBack: () => {}
    };
  },
  computed: {
    modalState(): ModalState {
      return this.$store.state.modalState;
    }
  },
  methods: {
    hideModal(newCallBack: any) {
      this.callBack = newCallBack;
      this.$store.dispatch("hideYesNoModal");
    },
    runCallBack() {
      this.callBack();
    }
  }
});
</script>
