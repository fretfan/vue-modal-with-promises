import { ModalState } from "./store/ModalState";
import store from "./store";
import { BvModalEvent } from "bootstrap-vue";

export function showYesNoModal(message: string) {
  return store.dispatch("showYesNoModal", message);
}

export function showInfoModal(message: string) {
  return store.dispatch("showInfoModal", message);
}


