import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

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
            },
            {
                name: 'Notebook Dell Inspiron i15-3567-A30P Intel Core 7ª i5 4GB',
                price: 2284,
                image: 'https://ebid.s3.amazonaws.com/upload_medbig/9/5/2/uo_1518056108-1688-12.jpg',
                stars: 3.4,
                totalReviews: 20,
                details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            },
            {
                name: 'Notebook Samsung Essentials E21 Intel Celeron Dual Core',
                price: 1490,
                image: 'https://ebid.s3.amazonaws.com/upload_medbig/9/5/2/uo_1518056108-1688-12.jpg',
                stars: 1,
                totalReviews: 1,
                details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            },
            {
                name: 'Notebook Samsung Expert X22 Intel Core 7 i5 8GB',
                price: 2307,
                image: 'https://ebid.s3.amazonaws.com/upload_medbig/9/5/2/uo_1518056108-1688-12.jpg',
                stars: 4.4,
                totalReviews: 340,
                details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            },
            {
                name: 'Notebook VAIO Fit 15S B1211B Intel Core i5 4GB',
                price: 2599,
                image: 'https://ebid.s3.amazonaws.com/upload_medbig/9/5/2/uo_1518056108-1688-12.jpg',
                stars: 3,
                totalReviews: 30,
                details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            },
            {
                name: 'Notebook Dell Alienware - i7 16GB',
                price: 14000,
                image: 'https://ebid.s3.amazonaws.com/upload_medbig/9/5/2/uo_1518056108-1688-12.jpg',
                stars: 2,
                totalReviews: 248,
                details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            }
        ],

        smartphones: [{
                name: 'Smartphone Xiaomi Mi A1 dual Android one 7.1',
                price: 1199,
                image: 'https://ebid.s3.amazonaws.com/upload_medbig/9/5/2/uo_1518056108-1688-12.jpg',
                stars: 0,
                totalReviews: 0,
                details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            },
            {
                name: 'Smartphone Moto G 5S Dual Chip Android 7.0',
                price: 929,
                image: 'https://ebid.s3.amazonaws.com/upload_medbig/9/5/2/uo_1518056108-1688-12.jpg',
                stars: 1.5,
                totalReviews: 11,
                details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            },
            {
                name: 'iPhone 8 Dourado 64GB Tela 4.7" IOS 11',
                price: 3949,
                image: 'https://ebid.s3.amazonaws.com/upload_medbig/9/5/2/uo_1518056108-1688-12.jpg',
                stars: 1,
                totalReviews: 2,
                details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            },
            {
                name: 'Smartphone Samsung Galaxy S7 Edge',
                price: 1943,
                image: 'https://ebid.s3.amazonaws.com/upload_medbig/9/5/2/uo_1518056108-1688-12.jpg',
                stars: 5,
                totalReviews: 310,
                details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            },
            {
                name: 'Smartphone Motorola Moto G6 Plus',
                price: 1699,
                image: 'https://ebid.s3.amazonaws.com/upload_medbig/9/5/2/uo_1518056108-1688-12.jpg',
                stars: 2.9,
                totalReviews: 42,
                details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            },
            {
                name: 'Smartphone Motorola Moto Z3 Play',
                price: 2999,
                image: 'https://ebid.s3.amazonaws.com/upload_medbig/9/5/2/uo_1518056108-1688-12.jpg',
                stars: 0.5,
                totalReviews: 1,
                details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            }
        ],
        cartProducts: [],
        currentProduct: {},
        showModal: false,
        showPopupCart: false,
        apiDataProduct: [],
        dataArrived: false
    },

    getters: {
        getNotebooks: (state) => state.notebooks,
        getSmartphones: (state) => state.smartphones,
        getAllProducts: (state) => state.notebooks.concat(state.smartphones),
        getProductsInCart: (state) => state.cartProducts,
        getCurrentProduct: (state) => state.currentProduct,
        getShowModal: (state) => state.showModal,
        getPopupCart: (state) => state.showPopupCart,
        getDataFromApi: (state) => state.apiDataProduct
    },

    mutations: {
        ADD_PRODUCT: (state, product) => {
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
        }
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
        async getProductList({ commit }) {
            try {
                const response = await axios.get('http://localhost:9090/v1/items');
                const dataDB = await response.data;
                console.log(dataDB);
                commit('SET_PRODUCT_STORE', dataDB);
            } catch (error) {
                state.errorBag = error;
            }
        }
    }
});
