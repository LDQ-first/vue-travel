<template>
    <div class="hotel">
        
    </div>
</template>


<script>

    export default {
        name: 'hotel',
        data() {
            return {
                hotel: localStorage.hotel
            }
        },
        created() {
            this.hotel = JSON.parse(this.hotel)
            console.log(this.hotel)
        
        },
        computed: {

        },
        methods: {

        }

    }
</script>


<style lang="scss" scoped>
    .hotel {
        
    }
</style>