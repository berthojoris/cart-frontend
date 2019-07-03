<template>
    <div>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions([
            "deleteOrder"
        ]),
    },
    created() {
        this.deleteOrder(this.$route.params.orderId)
    },
}
</script>
