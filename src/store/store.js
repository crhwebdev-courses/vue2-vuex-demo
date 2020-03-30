import Vue from "vue";
import Vuex from "vuex";
import counter from "./modules/counter";
import blah from "./modules/blah";
import _ from "lodash";

Vue.use(Vuex);

// export const store = new Vuex.Store(_.merge(counter, blah));
export const store = new Vuex.Store({
  modules: {
    counter,
    blah
  }
});
