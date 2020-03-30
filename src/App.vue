<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <app-result></app-result>
        <app-another-result></app-another-result>
        <hr />
        <app-counter></app-counter>
        <hr />
        <app-another-counter></app-another-counter>
        <hr />
        <input type="text" v-model="blah" />
        <p>{{ blah }}</p>
        <hr />
        <button class="btn btn-primary" @click="doSomething">
          Do Something
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import Result from "./components/Result.vue";
import AnotherResult from "./components/AnotherResult.vue";
import AnotherCounter from "./components/AnotherCounter.vue";
import { mapActions } from "vuex";

export default {
  computed: {
    // use a getter and setter for computed property blah - we
    // need this so v-model works correctly with vuex
    blah: {
      get() {
        return this.$store.getters.blah;
      },
      set(value) {
        this.$store.dispatch("updateBlah", value);
      }
    }
  },
  methods: {
    ...mapActions(["doSomething"]),
    updateBlah(event) {
      this.$store.dispatch("updateBlah", event.target.value);
    }
  },
  components: {
    appCounter: Counter,
    appAnotherCounter: AnotherCounter,
    appResult: Result,
    appAnotherResult: AnotherResult
  }
};
</script>
