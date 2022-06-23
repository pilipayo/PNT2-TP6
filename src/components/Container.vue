<template>

  <section class="src-componentes-container">
    <div id="container">
      <Square v-for="(_, index) in squareQty" :key="index" :color="colors[index]" :status="squareStatus[index]"
        :index="index" />
    </div>

  </section>

</template>

<script lang="js">

import Square from './Square.vue';

export default {
  name: 'container-component',
  components: { Square },
  props: [],
  updated() {
  },
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
#container {
  margin: 20px auto;
  max-width: 600px;
}
</style>