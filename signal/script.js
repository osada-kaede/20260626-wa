Vue.createApp({
  data() {
    return {
      signal: "赤"
    };
  },
  methods: {
    changeSignal() {
      if (this.signal === "赤") {
        this.signal = "青";
      } else if (this.signal === "青") {
        this.signal = "青";
      } else {
        this.signal = "赤";
      }
    }
  }
}).mount("#app");