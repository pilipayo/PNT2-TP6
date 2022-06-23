<template>

  <section class="src-componentes-nav-bar">
      <div id="nav-bar">
      <button id="reset" @click="restart()"> New colors</button>
      <span class="msg" :style="{color: (message == 'You win' ? 'blue' : 'red')}">{{ message }} </span>
      <button id="easy" :class="!isHard && 'selected'" @click="setDifficulty({ isHard: false, qty: 3 })">easy</button>
      <button id="hard" :class="isHard && 'selected'" @click="setDifficulty({ isHard: true, qty: 6 })">hard</button>
    </div>

  </section>

</template>

<script lang="js">
export default {
  name: 'nav-bar',
  props: [],
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style scoped lang="css">
#navigator {
  background: #ffffff;
  height: 30px;
  text-align: center;
  margin: 0;
  margin-top: -30px;
}
.msg {
  color: red;
  display: inline-block;
  width: 20%;
}
button {
  border: none;
  background-color: white;
  font-family: "Montserrat", "Avenir";
  text-transform: uppercase;
  height: 100%;
  font-weight: 700;
  letter-spacing: 1px;
  color: steelblue;
  transition: all 0.3s;
  outline: none;
}
button:hover {
  color: white;
  background-color: steelblue;
}
.selected {
  background-color: steelblue;
  color: white;
}
</style>