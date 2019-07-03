<template>
    <div class="container">
        <div v-if="getNotify" class="alert alert-success notif">Hi... Your order is created</div>

        <div class="checkout-box">
            <ul class="checkout-list">
                <span>
                    <li v-for="(list, index) in getOrderList.data" :key="index" class="checkout-product">
                        <h3 class="product-name">Order ID {{ list.id }}</h3>
                        <span class="product-price">Total Rp.{{ list.total_amount }} </span>
                        <router-link :to="{ name: 'Orderdetail', params: {orderId: list.id } }">Detail</router-link>
                        <router-link :to="{ name: 'DeleteOrder', params: {orderId: list.id } }">Delete</router-link>
                    </li>
                </span>
            </ul>
        </div>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    created() {
        this.getListOrder()
    },
    methods: {
        ...mapActions([
            "getListOrder"
        ]),
    },
    computed: {
        ...mapGetters([
            "getNotify",
            "getOrderList"
        ]),
    },
}
</script>

<style scoped>

</style>

