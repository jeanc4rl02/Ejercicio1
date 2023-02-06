var app = new Vue({
  el: "#app",
  data: {
    message: "Hola Vue!",
    is: {
      new: false,
      play: false,
    },
  },
  methods: {
    showCreatedPlayer() {
      this.is = {
        new: true,
        play: false,
      };
    },

    showPlay() {
      this.is = {
        new: false,
        play: true,
      };
    },
  },
});
