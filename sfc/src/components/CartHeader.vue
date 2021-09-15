<template>
    <h1>{{ upperTitle }}</h1>

</template>


<script>
export default{
    data: () =>{
        return{
            title: "Vue Cart"
        }
    },
    computed: {
         // 미리 계산 수행, 결과를 캐싱
        upperTitle: function(){
            return this.title.toUpperCase();
        }
    }    
}
</script>


<style scoped>
    h1 {
        font-size: 2.0em;
        color: blue;
    }


</style>