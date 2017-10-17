<template>
    <div class="food">
        <ul class="foodlists">
            <li v-for="(item, index) in food" key="index" class="foodlist">
                <div class="intro">
                    <h3 class="title">{{item.name}}</h3>
                    <div class="detail">
                        <img :src="`//gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/lvpics/pic/item/${item.pic_url}.jpg`" alt="" class="img">
                        <p class="desc">{{item.desc}}</p>
                    </div>
                </div>
            </li>
        </ul>
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
        background: #CCC;
        .foodlists {
            .foodlist {
                background: #FFF;
                margin: 0.5em;
                padding: 0.5em;
                .intro {
                    .title {
                        margin-bottom: 1em;
                    }
                    .detail {
                        display: flex;
                        align-items: center;
                        .img {
                            width: 150px;
                            height: 100px;
                            margin-right: 0.5em;
                        } 
                        .title {

                        }
                    }

                }
            }
        }
    }
</style>