<template>
    <Products :products="getDataFromApi" />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import listOfProducts from "./ListOfProducts";
import Products from "./Products";

export default {
    components: {
        listOfProducts,
        Products
    },
    computed: {
        ...mapGetters([
            "getAllProducts",
            "getDataFromApi"
        ])
    },
    methods: {
        ...mapActions([
            "getProductList"
        ]),
    },
    created() {
        this.getProductList()
    }
};
</script>

<style scoped>
.listOfProducts {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
}

.product {
  width: 300px;
  background-color: #fff;
  list-style: none;
  box-sizing: border-box;
  padding: 1em;
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;
}

.product-name {
  font-size: 1.2em;
  font-weight: normal;
}

.product-price {
  width: 100%;
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;
}
</style>

