<template>

  <section class="src-componentes-square">
   <div class="square" @click="getColor(index)" :style="{ 'background-color': setColor }">
  </div>
  </section>

</template>

<script lang="js">
export default {
  name: 'square-component',
  props: ["color", "status", "index"],
  mounted() {
  },
  data() {
    return {
      isWrong: false,
    }
  },
  methods: {
    
  },
  computed: {
    setColor(){
      let dev;
      if(this.message == 'You win'){
        dev = this.pickedColor
      }else{
        dev = this.status ? '#232323' : this.color
      }
      return dev;
    }
  }
}
</script>

<style scoped lang="css">
.square-component {}
.displayNone {
  background-color: #232323;
}
.square {
  width: 30%;
  background: blue;
  padding-bottom: 30%;
  float: left;
  margin: 1.66%;
  border-radius: 10%;
  transition: background 0.8s;
  -webkit-transition: background 0.8s;
  -moz-transition: background 0.8s;
}
</style>
