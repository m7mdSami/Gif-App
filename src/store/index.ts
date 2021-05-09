import Vue from 'vue';
import Vuex from 'vuex';
import { createProxy, extractVuexModule } from "vuex-class-component";
import GifStore from './gif.vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule( GifStore )
  }
});

export const vxm = {
  gif: createProxy( store, GifStore ),
}