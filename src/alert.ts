import { ModalState } from "./store/ModalState";
import store from "./store";
import { BvModalEvent } from "bootstrap-vue";

// todo: get rid of vm. Use mixin/plugin?
export function showYesNo(message: string, vm: any) {
  return new Promise((resolve, reject) => {
    const state = new ModalState();
    state.message = message;
    store.dispatch("setYesNoModal", state);
    vm.$bvModal.show("yesNoModal");

    let trigger: string | null = null;

    vm.$root.$on(
      "bv::modal::hide",
      (bvEvent: BvModalEvent, modalId: string) => {
        if (modalId === "yesNoModal") {
          trigger = bvEvent.trigger;
        }
      }
    );

    vm.$root.$on(
      "bv::modal::hidden",
      (bvEvent: BvModalEvent, modalId: string) => {
        if (modalId === "yesNoModal") {
          store.dispatch("setYesNoModal", new ModalState());
          resolve(trigger);
        }
      }
    );
  });
}
