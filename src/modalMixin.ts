import { ModalState } from "./store/ModalState";
import { BvModalEvent } from "bootstrap-vue";

export const modalMixin = {
  methods: {
    showYesNo(message: string) {
      return new Promise((resolve, reject) => {
        const state = new ModalState();
        state.message = message;
        // @ts-ignore
        this.$store.dispatch("setYesNoModal", state);
        // @ts-ignore
        this.$bvModal.show("yesNoModal");

        let trigger: string | null = null;
        // @ts-ignore
        this.$root.$on(
          "bv::modal::hide",
          (bvEvent: BvModalEvent, modalId: string) => {
            if (modalId === "yesNoModal") {
              trigger = bvEvent.trigger;
            }
          }
        );
        // @ts-ignore
        this.$root.$on(
          "bv::modal::hidden",
          (bvEvent: BvModalEvent, modalId: string) => {
            if (modalId === "yesNoModal") {
              // @ts-ignore
              this.$store.dispatch("setYesNoModal", new ModalState());
              resolve(trigger);
            }
          }
        );
      });
    }
  }
};
