<template>
    <div class="route">
        <h1 class="title">{{route.title}}</h1>
        <div class="content">
            <span class="detail-overview">行程概览</span>
            <ul class="daylists">
                <li class="daylist" v-for="(item, index) in route.day_list" key="index">
                    <span class="day">{{index + 1}}</span>
                    <span class="day-text">DAY</span>
                    <span class="city">{{item.citys[0].sname}}</span>
                    <p class="comment">{{item.comment}}</p>
                    <ul class="pathlists">
                        <li class="pathlist" v-for="(path, i) in item.path_list" key="i">
                            <h4 class="title">{{path.name}}</h4>
                            <span class="score">网友评分: {{path.overall_rating}}</span>
                            <p class="desc">{{path.desc}}</p>
                            <img :src="path.pic_url" alt="" class="img">
                            <p class="path-comment">{{path.comment}}</p>

                        </li>
                    </ul>
                    <ul class="recCaters" v-if="item.rec_caters">
                        <li class="recCater" v-for="(rec, j) in item.rec_caters.list" key="j">
                            <h4 class="title">{{rec.name}}</h4>
                            <span class="price">{{rec.price}}/ 人</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>

    export default {
        name: 'route',
        data() {
            return {
                route: JSON.parse(localStorage.route)
            }
        },
        created() {
            console.log(this.route)
        },
        computed: {

        },
        methods: {

        }

    }
</script>


<style lang="scss" scoped>
    .route {
        .title {
            font-size: 20px;
        }
        .content {
            padding: 1em 0.5em;
            .detail-overview {
                float: left;
            }
            .daylists {
                .daylist {
                    margin: 2em 0.5em;
                    padding: 0.5em;
                    border-bottom: 1px solid #CCC;
                    display: flex;
                    flex-direction: column;
                    .day {
                        font-size: 3em;
                    }
                    .day-text {

                    }
                    .city {
                        font-size: 1.5em;
                        border-bottom: 3px solid;
                    }
                    .comment {
                        margin: 1em;
                    }
                    .pathlists {
                        border-top: 1px solid #CCC;
                        padding: 1em 0;
                        .pathlist {
                            padding: 1em 0;
                        }
                        .title {

                        }
                        .score {
                            color: #f2920c;
                        }
                        .desc {

                        }
                        .img {
                            margin: 1em;
                            width: 241px;
                            height: 181px;
                        }
                        .path-comment {

                        }
                    }
                    .recCaters {
                        .recCater {
                            .title {

                            }
                            .price {

                            }
                        }
                    }
                    
                }
            }
        }
    }
</style>