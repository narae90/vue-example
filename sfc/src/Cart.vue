<template>
    <div id ="app">
        <cart-header></cart-header>
        <div v-show="showAll">
            <h2>전체목록</h2>
            <ul>
                <li v-for="(item, index) in items"
                    v-bind:key="index">{{ item.name }}</li>
            </ul>
        </div>
        <shop-list v-bind:shopping-items="items"></shop-list>
        <cart-footer></cart-footer>
    </div>
</template>

<script>
import CartHeader from './components/CartHeader.vue';
import CartFooter from './components/CartFooter.vue';
import ShopList from './components/ShopList.vue';
export default {
    data: () => {
        return {
            items: [
                {name: "무", buy: false},
                {name: "배추", buy: false},
                {name: "쪽파", buy: true},
                {name: "무", buy: true}
            ],
            showAll: true,
            showOption: true
        }
    },
    components: {
        "cart-header": CartHeader,  
        "cart-footer": CartFooter,
        "shop-list": ShopList
    }
}

</script>



<style>
li {
    list-style: none;
    height:30px;
}

li button {
    float: right;
}

</style>