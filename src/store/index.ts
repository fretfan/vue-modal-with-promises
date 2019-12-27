import Vue from "vue";
import Vuex from "vuex";
import { ModalState } from "./ModalState";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalState: new ModalState()
  },
  mutations: {
    setYesNoModal(state: any, newState: any) {
      state.modalState = newState;
    }
  },
  actions: {
    setYesNoModal(context: any, newState: any) {
      context.commit("setYesNoModal", newState);
    },
  },
  modules: {}
});
