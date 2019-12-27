<template>
  <b-modal id="yesNoModal" ref="Aloha" title="BootstrapVue">
    Modal message:
    <p>{{ modalState.message }}</p>
    <template v-slot:modal-footer="{ hide }">
      <b-button @click="hide('yes')" variant="primary">Yes</b-button>
      <b-button @click="hide('no')">No</b-button>
    </template>
  </b-modal>
</template>

<script lang="ts">
import Vue from "vue";
import { ModalState } from "./store/ModalState";

export default Vue.extend({
  computed: {
    modalState(): ModalState {
      return this.$store.state.modalState;
    }
  }
});
</script>
