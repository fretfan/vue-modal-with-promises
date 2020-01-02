import { ModalState } from "./store/ModalState";
import store from "./store";

export function showYesNoModal(message: string) {
  return new Promise<string>((resolve: any) => {
    const state = new ModalState();
    state.message = message;
    state.type = "yesNo";
    state.resolver = resolve;

    store.dispatch("setModalData", state);
  });
}

export function showInfoModal(message: string) {
  return new Promise<string>((resolve: any) => {
    const state = new ModalState();
    state.message = message;
    state.type = "info";
    state.resolver = resolve;

    store.dispatch("setModalData", state);
  });
}
