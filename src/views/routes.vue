<template>
    <div class="routes">
        
    </div>
</template>


<script>
    import { proxy, route} from '../api'
    import axios from 'axios'

    export default {
        name: 'routes',
        data() {
            return {
                routes: localStorage.routes
            }
        },
        created() {
            this.routes = JSON.parse(this.routes)
            console.log(this.routes)
        
        },
        computed: {

        },
        methods: {

        }

    }
</script>


<style lang="scss" scoped>
    .routes {
        
    }
</style>