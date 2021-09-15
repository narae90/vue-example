<template>
    <div>
        <h2>산 물건들</h2>
        <ul>
            <!-- <li v-for="(item, index) in boughtItems"
            v-if="item.buy"> --> <!-- computed 사용으로 주석 -->

                <li v-for="(item,index) in filteredItems" v-bind:key="index"> <!--117, computed 연결-->
                        
                {{ item.name }}
                <button v-on:click="removeItem(item)">삭제</button>
                <button v-on:click="cancelBuy(item)">구매 취소</button>
            </li>    
        </ul>
    </div>


</template>


<script>
export default {
    props:["bought-items"],
            methods:{
                cancelBuy: function(item){
                    item.buy = false;

                },
                removeItem: function(item){
                    //  부모로 삭제할 아이템을 전달
                    console.log("삭제할 아이템:",  item);
                    this.$emit("remove-item", item);
                }
            },
            computed:{
                filteredItems: function(){
                    // 미리 연산을 수행, 결과 캐싱
                    return this.boughtItems.filter(item => {
                        return item.buy;
                    })
                }
            }
        }    

</script>


<style scoped>

</style>