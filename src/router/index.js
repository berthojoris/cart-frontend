import Vue from 'vue';
import Router from 'vue-router';
import AllProducts from '../components/AllProducts';
import Product from '../components/Product';
import CartCheckout from '../components/CartCheckout';
import OrderList from '../components/OrderList';
import OrderDetail from '../components/OrderDetail';
import DeleteOrder from '../components/DeleteOrder';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '',
            name: 'All Products',
            component: AllProducts,
        },
        {
            path: '/product-details',
            name: 'Product',
            component: Product,
        },
        {
            path: '/checkout',
            name: 'Checkout',
            component: CartCheckout,
        },
        {
            path: '/orders',
            name: 'Orders',
            component: OrderList,
        },
        {
            path: '/order/:orderId',
            name: 'Orderdetail',
            component: OrderDetail,
        },
        {
            path: '/order/delete/:orderId',
            name: 'DeleteOrder',
            component: DeleteOrder,
        },
    ],
});
