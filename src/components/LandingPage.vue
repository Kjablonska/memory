<template>
  <div>
    <h2>Memory game</h2>
    <div class="landing-container">
      <div class="params-setter">
        <label>Select number of tiles:</label>
        <input
          type="number"
          id="tiles-number"
          v-model="tilesNumber"
          v-on:change="tilesChange"
        />
      </div>
      <div class="params-setter">
        <label>Select number of color groups:</label>
        <input type="number" id="color-groups" v-model="groupSize" />
      </div>
    </div>
    <div class="error-container">
      <span class='error-msg' v-show="!isValid"
        >Number of tiles must be divisible by the number of color groups!</span
      >
    </div>
    <div class="buttons-container">
      <button
        class="btn start-btn"
        v-bind:style="[
          isValid
            ? { 'background-color': 'white' }
            : { 'background-color': 'lightgrey', cursor: 'not-allowed' },
        ]"
        @click="start()"
      >
        Start the game
      </button>
      <button class="btn ranking-btn" @click="seeRanking()">Ranking</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  props: {},
  data() {
    return { tilesNumber: 6, groupSize: 2 };
  },
  computed: {
    isValid() {
      return this.tilesNumber > 0 && this.tilesNumber % this.groupSize === 0 && this.tilesNumber >= 2 * this.groupSize;
    },
  },
  methods: {
    tilesChange(value) {
      console.log(value);
      this.tilesNumber = value.target.value;
    },
    start() {
      if (this.isValid) {
        this.$router.push({
          path: "/game",
          name: "memory",
          query: { tilesNumber: this.tilesNumber, groupSize: this.groupSize },
        });
      }
    },
    seeRanking() {
      this.$router.push({ path: "/ranking", name: "ranking" });
    },
  },
};
</script>

<style scoped>
.landing-container {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}

.params-setter {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.buttons-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.error-msg {
  font-size: 12px;
  color: red;
}

.error-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}

.btn {
  height: 30px;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: white;
}

.start-btn {
  width: 120px;
  margin-right: 10px;
}

.ranking-btn {
  width: 80px;
}

label {
  width: 250px;
  margin-left: 20px;
  margin-bottom: 10px;
  text-align: left;
}

input {
  height: 20px;
  width: 50px;
}
</style>
