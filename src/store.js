import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        notebooks: [{
            name: 'Notebook Lenovo Ideapad 320 Intel® Core i5-7200u 8GB',
            price: 2259,
            image: 'https://ebid.s3.amazonaws.com/upload_medbig/9/5/2/uo_1518056108-1688-12.jpg',
            stars: 5,
            totalReviews: 230,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        }],
        cartProducts: [],
        currentProduct: {},
        showModal: false,
        showPopupCart: false,
        apiDataProduct: [],
        dataArrived: false,
        notify: false,
        errorBag: null
    },

    getters: {
        getNotebooks: (state) => state.notebooks,
        getSmartphones: (state) => state.smartphones,
        getAllProducts: (state) => state.notebooks.concat(state.smartphones),
        getProductsInCart: (state) => state.cartProducts,
        getCurrentProduct: (state) => state.currentProduct,
        getShowModal: (state) => state.showModal,
        getPopupCart: (state) => state.showPopupCart,
        getError: (state) => state.errorBag,
        getDataFromApi: (state) => state.apiDataProduct,
        getNotify: (state) => state.notify
    },

    mutations: {
        ADD_PRODUCT: (state, product) => {
            state.notify = false;
            state.cartProducts.push(product);
        },
        REMOVE_PRODUCT: (state, index) => {
            state.cartProducts.splice(index, 1);
        },
        CURRENT_PRODUCT: (state, product) => {
            state.currentProduct = product;
        },
        SHOW_MODAL: (state) => {
            state.showModal = !state.showModal;
        },
        SHOW_POPUP_CART: (state) => {
            state.showPopupCart = !state.showPopupCart;
        },
        SET_PRODUCT_STORE: (state, data) => {
            state.apiDataProduct = data;
        },
        ORDER_SUBMITED: (state) => {
            state.cartProducts = [];
            router.push({
                name: "Orders"
            });
            state.notify = true;
        },
        SHOW_NOTIF: (state) => {
            state.showPopupCart = !state.showPopupCart;
        },
    },

    actions: {
        addProduct: (context, product) => {
            context.commit('ADD_PRODUCT', product);
        },
        removeProduct: (context, index) => {
            context.commit('REMOVE_PRODUCT', index);
        },
        currentProduct: (context, product) => {
            context.commit('CURRENT_PRODUCT', product);
        },
        showOrHiddenModal: (context) => {
            context.commit('SHOW_MODAL');
        },
        showOrHiddenPopupCart: (context) => {
            context.commit('SHOW_POPUP_CART');
        },
        async getProductList({
            commit
        }) {
            try {
                const response = await axios.get('http://localhost:9090/v1/items');
                const dataDB = await response.data;
                commit('SET_PRODUCT_STORE', dataDB);
            } catch (error) {
                state.errorBag = error;
            }
        },
        async createOrder({
            commit,
            state
        }) {
            try {
                console.log(state.showPopupCart);
                const response = await axios.post('http://localhost:9090/v1/order/save', {
                    total_amount: 10000,
                    detail: state.cartProducts
                });
                const dataDB = await response.data;
                commit('ORDER_SUBMITED');
            } catch (error) {
                state.errorBag = error;
            }
        },
        async listOrder({
            commit
        }) {
            try {
                const response = await axios.post('http://localhost:9090/v1/order/', {
                    total_amount: 10000,
                });
                const dataDB = await response.data;
            } catch (error) {
                state.errorBag = error;
            }
        }
    }
})