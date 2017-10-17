<template>
    <div class="hotel">
         <ul class="hotellists">
            <li v-for="(item, index) in hotel" key="index" class="hotellist">
                <div class="intro">
                    <img :src="item.pic_url" alt="" class="img">
                    <div class="detail">
                        <h3 class="title">{{item.name}}</h3>
                        <span class="score">网友评分{{item.over_rating}}</span>
                        <p class="area">{{item.area}}</p>
                    </div>
                    <p class="price">￥{{item.price}}起</p>
                </div>
            </li>
        </ul>
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
         background: #CCC;
        .hotellists {
            .hotellist {
                background: #FFF;
                margin: 0.5em;
                padding: 0.5em;
                .intro {
                    display: flex;
                    justify-content: space-between;

                    .img {
                        width: 70px;
                        height: 70px;
                        margin-right: 0.5em;
                    }
                    .detail {
                        font-size: 12px;
                        flex: 1;
                        .title {

                        }
                        .area {
                            
                        }
                    }
                    .price {
                        color: #eb5105;

                    }
                }
            }
        }
    }
</style>