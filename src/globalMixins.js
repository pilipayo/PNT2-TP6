import Vue from "vue";

const globalMixins = {
  methods: {
    setDifficulty({ isHard, qty }) {
      this.$store.dispatch("setDifficulty", { isHard, qty });
      this.init(qty);
    },
    init(qty) {
      const colors = this.createNewColors(qty);
      this.$store.dispatch("init", {
        colors: colors,
        pickedColor: colors[this.pickColor()],
        squareStatus: this.getSquareStatus(qty),
      });
    },
    getSquareStatus(qty) {
      const arr = [];
      for (let index = 0; index < qty; index++) {
        arr.push(false);
      }
      return arr;
    },
    createNewColors(numbers) {
      const arr = [];
      for (let i = 0; i < numbers; i++) {
        arr.push(this.createRandomStringColor());
      }
      return arr;
    },

    createRandomStringColor() {
      const newColor =
        "rgb(" +
        this.randomInt() +
        ", " +
        this.randomInt() +
        ", " +
        this.randomInt() +
        ")";
      return newColor;
    },
    randomInt() {
      return Math.floor(Math.random() * 256);
    },
    pickColor() {
      let quantity;
      if (this.isHard) {
        quantity = 6;
      } else {
        quantity = 3;
      }
      return Math.floor(Math.random() * quantity);
    },
    restart() {
      this.init(this.squareQty);
    },
    getColor(index) {
      if(!this.$store.state.disable){
        let msg = "";
        if (this.pickedColor === this.color) {
          msg = "You win";
          this.$store.dispatch("disableGame", true);
        } else {
          msg = "Choose another color";
          const statusUpdated = this.squareStatus.map((sq, i) => {
            if (i != index && !sq) {
              return (sq = false);
            } else {
              return (sq = true);
            }
          });
  
          this.$store.dispatch("changeSquareStatus", statusUpdated);
        }
        this.$store.dispatch("selectedColor", this.color);
        this.$store.dispatch("message", msg);
      }
    },
  },
  computed: {
    isHard() {
      const difficulty = this.$store.state.isHard;
      return difficulty;
    },
    squareQty() {
      return this.$store.state.squareQty;
    },
    colors() {
      return this.$store.state.colors;
    },
    selectedColor() {
      return this.$store.state.selectedColor;
    },
    pickedColor() {
      return this.$store.state.pickedColor;
    },
    message() {
      return this.$store.state.message;
    },
    squareStatus() {
      return this.$store.state.squareStatus;
    },
  },
};

Vue.mixin(globalMixins);