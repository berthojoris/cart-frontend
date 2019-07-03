<template>
    <div class="container">
        <div v-if="getNotify" class="alert alert-success notif">Hi... Your order is created</div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            "getNotify"
        ]),
    },
}
</script>

<style scoped>

</style>

