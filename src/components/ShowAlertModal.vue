<script lang="ts">
import Vue from "vue";
import { BvModalEvent } from "bootstrap-vue";
import { ModalState } from "@/store/ModalState";

export default Vue.extend({
  methods: {
    showYesNo(message: string) {
      return new Promise((resolve, reject) => {
        const state = new ModalState();
        state.message = message;
        this.$store.dispatch("setYesNoModal", state);
        this.$bvModal.show("yesNoModal");

        let triggerName: string | null = null;

        this.$root.$on(
          "bv::modal::hide",
          (bvEvent: BvModalEvent, modalId: string) => {
            if (modalId === "yesNoModal") {
              triggerName = bvEvent.trigger;
            }
          }
        );

        this.$root.$on(
          "bv::modal::hidden",
          (bvEvent: BvModalEvent, modalId: string) => {
            if (modalId === "yesNoModal") {
              this.$store.dispatch("setYesNoModal", new ModalState());
              resolve(triggerName);
            }
          }
        );
      });
    }
  }
});
</script>
