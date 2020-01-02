<template>
  <div>
    <b-modal
      id="yesNoModal"
      title="YesNo"
      :visible="modalState.type === 'yesNo'"
      @hide="hideHandler"
      @hidden="hiddenHandler"
    >
      Modal message:
      <p>{{ modalState.message }}</p>
      <template v-slot:modal-footer="{ hide }">
        <b-button @click="hide('yes')" variant="primary">Yes</b-button>
        <b-button @click="hide('no')">No</b-button>
      </template>
    </b-modal>

    <b-modal
      id="infoModal"
      title="Info"
      :visible="modalState.type === 'info'"
      @hide="hideHandler"
      @hidden="hiddenHandler"
    >
      <p :style="{ color: 'red' }">Info Modal message:</p>
      <p>{{ modalState.message }}</p>
      <template v-slot:modal-footer="{ hide }">
        <b-button @click="hide('yes')" variant="primary">Yes</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ModalState } from "./store/ModalState";

export default Vue.extend({
  data() {
    return {
      triggerName: null as string | null
    };
  },
  computed: {
    modalState(): ModalState {
      return this.$store.state.modalState;
    }
  },
  methods: {
    hideHandler(event: any) {
      this.triggerName = event.trigger;
    },
    hiddenHandler(event: any) {
      if (this.modalState.resolver) {
        this.modalState.resolver(this.triggerName);
      }
      this.$store.dispatch("setModalData", new ModalState());
      this.triggerName = null;
    }
  }
});
</script>
