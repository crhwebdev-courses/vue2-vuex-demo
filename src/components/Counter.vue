<template>
  <div>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="maxIncrement(100)">
      Max Increment
    </button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  // use actions -- these can be ansychronous
  methods: {
    ...mapActions(["increment", "maxIncrement", "decrement"])
  }
};
</script>
