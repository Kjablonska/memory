<template>
<div>
  <ul v-for="(ranking, i) in getRanking" :key="i">
    <li>{{ ranking.tilesNumber }}</li>
    <li>{{ ranking.groupSize }}</li>
    <li>{{ ranking.moves }}</li>
  </ul>
</div>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
  name: "Ranking",
  computed: {
    ...mapGetters([
      'getRanking'
    ]),
  },
};
</script>

<style></style>
