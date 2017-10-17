<template>
    <div class="routes">
        <ul class="routeslists">
            <li class="routeslist" v-for="(item, index) in routes" key="index">
                <div class="detail">
                    <img :src="item.pic_url" alt="" class="img">
                    <div class="desc">
                        <h3 class="title">{{item.pl_name}}</h3>
                        <span class="days">{{item.days}}天</span>
                        <span class="nickname">{{item.counselor.nickname}}</span>
                    </div>
                </div>
                <ul class="destinations">
                    <li class="destination" v-for="(destination, i) in item.destinations" key="i" v-if="i <=1">
                        {{destination.sname}} ->
                    </li>
                    <li v-else-if="i === 2">……</li>
                </ul>
            </li>
        </ul>
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
        background: #ebebeb;
        .routeslists {
            .routeslist {
                background: #FFF;
                margin: 0.5em;
                padding: 0.5em;
                .detail {
                    display: flex;
                    align-items: center;
                    .img {
                        width: 100px;
                        height: 100px;
                        margin-right: 1em;
                    }
                    .desc {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        .title {

                        }
                        .days {
                            color: #f2920c;
                        }
                        .nickname {

                        }
                    }
                }
                .destinations {
                    margin: 1em 0;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    .destination {
                        
                        
                    }
                }
            }
        }
    }
</style>