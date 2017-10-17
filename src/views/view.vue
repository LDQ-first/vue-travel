<template>
    <div class="view">
        
    </div>
</template>


<script>

    export default {
        name: 'view',
        data() {
            return {
                view: localStorage.view
            }
        },
        created() {
            this.view = JSON.parse(this.view) 
            console.log(this.view)
            
        },
        computed: {
            
        },
        methods: {

        }

    }
</script>


<style lang="scss" scoped>
    .view {
        
    }
</style>