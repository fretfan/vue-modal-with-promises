import { ModalState } from "./store/ModalState";
import store from "./store";

export function showYesNo(message: string, yesCallBack: () => void) {
  const state = new ModalState();
  state.isShown = true;
  state.message = message;
  state.yesCallBack = yesCallBack;
  store.dispatch("showYesNoModal", state);
}
