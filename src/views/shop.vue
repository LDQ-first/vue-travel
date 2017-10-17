<template>
    <div class="shop">
        
    </div>
</template>


<script>

    export default {
        name: 'shop',
        data() {
            return {
                shop: localStorage.shop
            }
        },
        created() {
            this.shop = JSON.parse(this.shop)
            console.log(this.shop)
        
        },
        computed: {
            
        },
        methods: {

        }

    }
</script>


<style lang="scss" scoped>
    .shop {
        
    }
</style>