import { ModalState } from "./store/ModalState";
import store from "./store";

export async function showYesNoModal(
  message: string,
  yesCallBack?: () => any,
  noCallBack?: () => any
) {
  const promise = new Promise<string>((resolve: any) => {
    const state = new ModalState();
    state.message = message;
    state.type = "yesNo";
    state.resolver = resolve;

    store.dispatch("setModalData", state);
  });
  const answer = await promise;
  if (answer === "yes") {
    if (typeof yesCallBack === "function") {
      yesCallBack();
    }
  } else if (answer === "no") {
    if (typeof noCallBack === "function") {
      noCallBack();
    }
  }
  return promise;
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

