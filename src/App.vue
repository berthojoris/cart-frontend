<template>
    <div class="container">
        <mainMenu>
            <btn btnColor="btn btn-small btn-info btn-popup"
            :cartIcon="true"
            @click.native="showPopupCart()">
            Cart
                <span class="btn-circle" v-if="hasProduct()">
                    {{ getProductsInCart.length }}
                </span>
            </btn>
            <transition name="appear">
                <popupcart class="cart" v-if="getPopupCart"/>
            </transition>
        </mainMenu>
        <transition name="leave">
            <router-view></router-view>
        </transition>
        <maskBg v-if="getPopupCart" @click.native="showPopupCart()"/>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import mainMenu from './components/Menu';
import btn from './components/Btn';
import popupcart from './components/Popupcart';
import maskBg from './components/Mask';

export default {
    components: {
        mainMenu,
        btn,
        popupcart,
        maskBg,
    },
    methods: {
        ...mapActions([
            'showOrHiddenPopupCart',
        ]),
        hasProduct() {
            return this.getProductsInCart.length > 0;
        },
        showPopupCart() {
            this.showOrHiddenPopupCart();
        },
    },
    computed: {
        ...mapGetters([
            'getProductsInCart',
            'getPopupCart',
        ]),
    },
};
</script>

<style>
  @import './assets/css/normalize.css';
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #FAFAFA;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  .container {
    width: 100%;
  }

  .cart {
    position: absolute;
    top: 75px;
    right: 300px;
  }

  .btn-circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .leave-enter-active, .leave-leave-active {
    transition: all 1.2s;
  }
  .leave-enter, .leave-leave-to {
    opacity: 0;
    transform: translateX(-50%);
  }

  .appear-enter-active {
    animation: appear-animation .5s;
  }

  .appear-leave-active {
    animation: appear-animation .5s reverse;
  }

  @keyframes appear-animation {
    0% {
      transform: translateY(-50%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
  .alert {
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-radius: .25rem;
    text-align: center;
}
.alert-success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
}

.alert-primary {
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
}

.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.btn-success {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
}


.checkout-box {
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1em;
}

.checkout-list {
    padding: 0;
}

.checkout-product {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr .5fr;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
    border-radius: 5px;
    list-style: none;
    box-sizing: border-box;
    padding: .8em;
    margin: 1em 0;
}

.checkout-product * {
    place-self: center;
}
.product-image {
    grid-column: 1/2;
    width: 50%;
}

.product-name {
    box-sizing: border-box;
}

.product-price {
    font-size: 1.2em;
    font-weight: bold;
}

.product-remove {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 0;
    background-color: #E0E0E0;
    color: #fff;
    cursor: pointer;
}

.total {
    font-size: 2em;
    font-weight: bold;
    align-self: flex-end;
}

.checkout-message {
 font-size: 1.5em;
}

.fade-enter-active, .fade-leave-active {
transition: all .5s;
}

.fade-enter, .fade-leave-to {
    transform: translateX(-40px);
    opacity: 0;
}
</style>
