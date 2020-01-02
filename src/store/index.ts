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
    }
  },
  modules: {}
});
