<template>
    <div>
        <p>{{ message }}</p>
        <input v-model="newItem">
        <button v-on:click="addItem">추가</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            newItem: "",    //  감시
            message: "상품을 입력하세요."
        }
    },
    watch: {
        newItem: function(item) {
            console.log("watch:", item);
            if (this.newItem.trim().length > 0) {
                this.message = "상품을 등록하실 수 있습니다."
            } else {
                this.message = "상품을 입력하세요."
            }
        }
    },
    methods: {
        addItem: function() {
            console.log("추가할 아이템:", this.newItem);
            if (this.newItem.trim().length > 0) {
                //  구매 아이템을 부모로 전송
                this.$emit("add-item", this.newItem.trim());
                this.newItem = "";
            }
        }
    }
}
</script>

<style scoped>
</style>