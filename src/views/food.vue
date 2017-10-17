<template>
    <div class="food">
        
    </div>
</template>


<script>

    export default {
        name: 'food',
        data() {
            return {
                food: localStorage.food
            }   
        },
        created() {
            this.food = JSON.parse(this.food)
            console.log(this.food)
        
        },
        computed: {

        },
        methods: {

        }

    }
</script>


<style lang="scss" scoped>
    .food {
        
    }
</style>