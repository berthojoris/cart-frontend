<template>
    <div class="checkout-box">
        <ul class="checkout-list">
            <transition-group name="fade">
                <li v-for="(product, index) in getProductsInCart" :key="index" class="checkout-product">
                    <img src="@/assets/images/sepatu.jpg" class="product-image">
                    <h3 class="product-name">{{ product.item_name }}</h3>
                    <span class="product-price">Rp.{{ product.price }} </span>
                    <button class="product-remove" @click="remove(index)">X</button>
                </li>
            </transition-group>
        </ul>
        <div v-if="!hasProduct()" class="checkout-message">
            <h3>No products...</h3>
            <router-link to="./">Back to list of products</router-link>
        </div>
        <h3 class="total" v-if="hasProduct()">Total: Rp.{{ totalPrice() }}</h3>

        <btn v-if="getProductsInCart.length > 0" btnColor="btn btn-large btn-sucess" @click.native="createOrder(totalPrice())">Create Order</btn>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import btn from './Btn';

export default {
    components: {
        btn,
    },
    computed: {
        ...mapGetters([
            "getProductsInCart",
        ]),
    },
    methods: {
        ...mapActions([
            "removeProduct",
            "createOrder"
        ]),
        hasProduct() {
            return this.getProductsInCart.length > 0;
        },
        totalPrice() {
            return this.getProductsInCart.reduce((current, next) =>
            current + next.price, 0);
        },
        remove(index) {
            this.removeProduct(index);
        },
    },
};
</script>

<style scoped>
.notif {
    margin-top:20px;
}


</style>
