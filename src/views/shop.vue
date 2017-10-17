<template>
    <div class="shop">
        <ul class="shoplists">
            <li class="shoplist" v-for="(item, index) in shop" key="index">
                <h3 class="title">{{item.name}}</h3>
                <div class="detail">
                    <img :src="`//gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/lvpics/pic/item/${item.pic_url}.jpg`" alt="" class="img">
                    <p class="desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
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
        background: #CCC;
        .shoplists {
            .shoplist {
                 background: #FFF;
                margin: 0.5em;
                padding: 0.5em;
                .title {
                     margin-bottom: 1em;
                }
                .detail {
                    display: flex;
                    align-items: center;
                    .img {
                        width: 150px;
                        height: 100px;
                    }
                    .desc {
                        font-size: 14px;
                        margin-left: 0.5em;
                    }
                }
            }
        }
    }
</style>