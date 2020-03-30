<template>
  <div>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  //use mutations directly (these must be synchronous)
  methods: {
    ...mapActions(["increment", "decrement"])
    // increment() {
    //   this.$store.commit("increment");
    // },
    // decrement() {
    //   this.$store.commit("decrement");
    //}
  }
};
</script>
