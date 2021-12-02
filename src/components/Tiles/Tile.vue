<template>
  <div>
    <button
    @click="flip()"
      class="tile"
      v-bind:style="[
        {'top': this.top, 'left': this.left},
        isFlipped
          ? { 'background-color': color }
          : { 'background-color': 'grey' }
      ]"
    >
      </button>
  </div>
</template>

<script>
export default {
  name: "Tile",
  props: {
    color: String,
    isFlipped: Boolean,
  },
  data: function () {
    const top = this.getTopPosition();
    const left = this.getLeftPosition();
    return { top, left };
  },
  methods: {
    flip() {
      console.log(this.isFlipped)
      if (!this.isFlipped) {
        console.log("FLIP")
        this.$emit('onCardFlipped')
      }
    },
    getTopPosition: function () {
      const randomTop = this.getRandomNumber(150, window.innerHeight - 100);
      console.log(randomTop)
      return `${randomTop}px`;
    },
    getLeftPosition: function () {
      const randomLeft = this.getRandomNumber(20, window.innerWidth - 100);
      return `${randomLeft}px`;
    },
    getRandomNumber: function (min, max) {
      return Math.random() * (max - min) + min;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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

.tile {
  width: 80px;
  height: 120px;
  border: 1px solid black;
  position: absolute;
  transition: background-color 500ms linear;
}

</style>
