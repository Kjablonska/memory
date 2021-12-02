<template>
  <div>
    <div class="header">
      <h3>Points: {{ this.points }}</h3>
      <h3>Moves: {{ this.moves }}</h3>
      <button class="back-btn">Back</button>
    </div>
    <div v-if="win">
      Congratulations! You won in {{ moves }} moves.
      <button @click="goToRanking()" class="back-btn">Ranking</button>
    </div>
    <template v-for="(group, id) in colors">
      <Tile
        v-for="n in group.groupSize"
        v-bind:key="`${n}${id}`"
        :color="group.color"
        :isFlipped="tilesState[`${n}${id}`]"
        @onCardFlipped="onCardFlipped(`${n}${id}`, group.color)"
      ></Tile>
    </template>
  </div>
</template>

<script>
import Vue from "vue";
import Tile from "./Tile.vue";

export default {
  name: "Tiles",
  components: {
    Tile,
  },
  data: function () {
    const tilesNumber = parseInt(this.$route.query.tilesNumber);
    const groupSize = parseInt(this.$route.query.groupSize);
    const groupsNumber = tilesNumber / groupSize;
    const win = false;

    const colors = this.getColors(groupSize, groupsNumber);
    const points = 0;
    const moves = 0;
    const tilesState = {};
    const flipped = [];
    for (let i = 0; i < groupsNumber; i++) {
      for (let j = 0; j < groupSize; j++) {
        tilesState[`${j + 1}${i}`] = false;
      }
    }

    let counter = 0;
    return {
      win,
      colors,
      points,
      moves,
      flipped,
      tilesState,
      counter,
      groupSize,
      groupsNumber,
      tilesNumber,
    };
  },
  methods: {
    getColors(groupSize, groupsNumber) {
      const colors = [];
      for (let i = 0; i < groupsNumber; i++) {
        const color = this.generateColor();
        colors.push({ color: color, groupSize: groupSize });
      }

      return colors;
    },
    generateColor() {
      const hexVal = Math.floor(Math.random() * 16777215).toString(16);
      return `#${hexVal}`;
    },
    onCardFlipped(id, color) {
      Vue.set(this.tilesState, id, true);
      console.log(this.tilesState);
      this.flipped = [...this.flipped, { id, color }];

      if (this.flipped.length === this.groupSize) {
        setTimeout(() => {
          this.moves++;
          this.checkIfPair();
        }, 1000);
      }
    },
    checkIfPair() {
      // TODO
      const card1 = this.flipped[0];
      const card2 = this.flipped[1];

      if (card1.color === card2.color) {
        this.points++;
        if (this.points === this.groupsNumber) {
          this.addToRanking();
          this.win = true;
        }
      } else {
        this.flipped.forEach((tile) => {
          Vue.set(this.tilesState, tile.id, false);
        });
      }
      this.flipped = [];
    },
    goToRanking() {
      this.$router.push({ path: "/ranking", name: "ranking" });
    },
    addToRanking() {
      const newGame = {
        tilesNumber: this.tilesNumber,
        groupSize: this.groupSize,
        moves: this.moves,
      };
      this.$store.commit("addGame", {
        newGame,
      });
    },
  },
};
</script>

<style scoped>
h3 {
  margin-right: 50px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: space-between;
}

.btn {
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  height: 30px;
}

.back-btn .btn {
  width: 50px;
}

.ranking-btn .btn {
  width: 60px;
}
</style>
