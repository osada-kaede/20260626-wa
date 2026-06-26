Vue.createApp({
  data() {
    return {
      message: "",
      length: 0
    };
  },
  methods: {
    focusInput() {
      this.message = "入力中";
    },
    blurInput() {
      this.message = "入力を終了しました";
    },
    countText(event) {
      this.length = event.target.value.length;
    },
    submitForm() {
      this.message = "送信しました";
    }
  }
}).mount("#app");