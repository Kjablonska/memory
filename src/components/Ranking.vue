<template>
  <div>
    <p>See all your games here:</p>
    <p v-if="getRanking.length === 0">You have no games.</p>
    <button class="btn" @click="goToParamsSelection()">New game!</button>
    <div class="ranking-list">
      <ul v-for="(ranking, i) in getRanking" :key="i">
        <li>Number of tiles: {{ ranking.tilesNumber }}</li>
        <li>Group size: {{ ranking.groupSize }}</li>
        <li>Number of moves: {{ ranking.moves }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Ranking",
  computed: {
    ...mapGetters(["getRanking"]),
  },
  methods: {
    goToParamsSelection() {
      this.$router.push({ path: "/", name: "home" });
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  text-align: left;
}

.ranking-list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.btn {
  height: 30px;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: white;
}
</style>
