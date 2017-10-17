<template>
    <div class="traffic">
        
    </div>
</template>


<script>

    export default {
        name: 'traffic',
        data() {
            return {
                traffic: localStorage.traffic
            }
        },
         created() {
            this.traffic = JSON.parse(this.traffic)
            console.log(this.traffic)
        
        },
        computed: {

        },
        methods: {

        }

    }
</script>


<style lang="scss" scoped>
    .traffic {
        
    }
</style>