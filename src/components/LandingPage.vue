<template>
  <div class="landing-container">
    <label>Select number of tiles:</label>
    <input
      type="number"
      id="tiles-number"
      :v-model="this.tilesNumber"
      v-on:change="tilesChange"
    />
    <label>Select number of color groups:</label>
    <input type="number" id="color-groups" :v-model="this.groupSize" />
    <button @click="start()"></button>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  props: {},
  data() {
    return { tilesNumber: 6, groupSize: 2 };
  },
  methods: {
    tilesChange(value) {
      console.log(value);
      this.tilesNumber = value.target.value;
    },
    start() {
      console.log("start", this.tilesNumber, this.groupSize);
      this.$router.push({ path: '/memory', name: 'memory', query: {tilesNumber: this.tilesNumber, groupSize: this.groupSize}})
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.landing-container {
  display: flex;
}
</style>

