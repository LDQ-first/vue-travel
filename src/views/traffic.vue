<template>
    <div class="traffic">
        <ul class="trafficlists" v-if="traffic">
            <li class="trafficlist" v-for="(item, index) in traffic" key="index">
                <h3 class="title">{{item.name}}</h3>
                <p class="desc">{{item.desc}}</p>
            </li>
        </ul>
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
        background: #CCC;
        .trafficlists {
            .trafficlist {
                background: #FFF;
                padding: 0.5em;
                margin: 0.5em;
                .title {
                    margin-bottom: 1em;
                }
                .desc {
                    font-size: 14px;
                }

            }
        }
    }
</style>