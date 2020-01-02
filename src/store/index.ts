import Vue from "vue";
import Vuex from "vuex";
import { ModalState } from "./ModalState";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalState: new ModalState()
  },
  mutations: {
    setModalData(state: any, newState: any) {
      state.modalState = newState;
    }
  },
  actions: {
    setModalData(context: any, state: any) {
      context.commit("setModalData", state);
    },
    showYesNoModal(context: any, message: any) {
      return new Promise<any>((resolve: any) => {
        const state = new ModalState();
        state.message = message;
        state.type = "yesNo";
        state.resolver = resolve;

        context.commit("setModalData", state);
      });
    },
    showInfoModal(context: any, message: any) {
      return new Promise<any>((resolve: any) => {
        const state = new ModalState();
        state.message = message;
        state.type = "info";
        state.resolver = resolve;

        context.commit("setModalData", state);
      });
    }
  },
  modules: {}
});
