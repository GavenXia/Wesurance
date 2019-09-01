<template>
    <div>

    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        var productId=this.$route.query.product_id
        console.log(productId)

        const params={
         product_id:productId,
         "language" : "sc"
}
         
    this.$http.post("/wesupromo/tpc/getProductTerms",params).then(res => {
        console.log(res)
    })
    }
}
</script>
<style lang="less" scope>
@import "~style/mixin.less";
    
    
</style>