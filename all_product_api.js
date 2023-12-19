console.log("ok");
var products = Vue.createApp({
  data() {
    return {
      products: [],
      category: {},
      cat: {},
      show: true,
      link: "",
      single_product_show: "",
    };
  },

  methods: {
    // all products
    getProducts() {
      axios.get("https://fakestoreapi.com/products").then((res) => {
        this.products = res.data;
        // console.log(res);
        console.log(this.products);
      });
    },
    // all category
    getCat() {
      console.log("achi");
      axios.get("https://fakestoreapi.com/products/categories").then((res) => {
        this.category = res.data;
      });
    },

    // category wise products
    catWise(category) {
      let catData = category;

      axios
        .get("https://fakestoreapi.com/products/category/" + catData)
        .then((res) => {
          this.catwiseData = res.data;
          this.products = this.catwiseData;
          //   console.log(this.catwiseData);
        });
    },

    // single_product
    single_product(product_id) {
      this.show = false;
      console.log("okaa");
      let id = product_id;
      axios
        .get("https://fakestoreapi.com/products/" + id)
        .then((res) => (this.single_product_show = res.data));
      console.log(this.single_product_show);
      
    },
  },
  mounted() {
    this.getProducts();
    this.getCat();
  },
});

products.mount("#product_id");
