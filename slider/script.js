Vue.createApp({
  data() {
    return {
      index: 0,
      slides: ["1.jpg", "2.jpg", "3.jpg"]
    };
  },
  methods: {
    previous() {
      if (this.index > 0) {
        this.index--;
      }
    },
    next() {
      if (this.index < this.slides.length - 1) {
        this.index++;
      }
    }
  }
}).mount("#app");