<template>
    <div class="container">
        <div class="checkout-box">
            <ul class="checkout-list">
                <span>
                    <li class="checkout-product">
                        <img src="@/assets/images/sepatu.jpg" class="product-image">
                        <h3 class="product-name">Order ID {{ getOrderById.data.id }}</h3>
                        <h3>Total Amount Rp.{{ getOrderById.data.total_amount }}</h3>
                    </li>
                    <li v-for="(orderDet, index) in getOrderDetailById.data" :key="index" class="checkout-product">
                        <p>Item ID : {{ orderDet.item_id }}</p>
                        <p>Qty : {{ orderDet.qty }}</p>
                    </li>
                </span>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            "getOrderById",
            "getOrderDetailById"
        ]),
    },
    methods: {
        ...mapActions([
            "getOrder",
            "getOrderDetail"
        ]),
    },
    created() {
        this.getOrder(this.$route.params.orderId)
        this.getOrderDetail(this.$route.params.orderId)
    },
}
</script>

<style>

</style>
