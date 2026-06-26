Vue.createApp({
  data() {
    return {
        tab:"news",
        message:"ニュース"
    };
  },
  methods:{
    showTab(tab){
        this.tab=tab;

        if(tab === "news"){
            this.message = "ニュース";
        } else if(tab === "sports"){
            this.message = "スポーツ";
        } else {
            this.message = "天気";
        }
    }
  }
}).mount('#app');