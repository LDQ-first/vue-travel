<template>
    <div class="view">
        <ul class="viewlists">
            <li v-for="(item,index) in view" key="index" class="viewlist">
                <img :src="item.pic_url" alt="" class="img">
                <div class="detail">
                    <h3 class="title">{{item.sname}}</h3>
                    <p class="desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
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
        background: #CCC;
        .viewlists {
            .viewlist {
                background: #FFF;
                margin: 0.5em;
                padding: 0.5em;
                display: flex;
                align-items: center;
                .img {
                    width: 121px;
                    height: 90px;
                    margin-right: 0.5em;
                }
                .detail {
                    flex: 1;
                    .title {
                        font-size: 1em;
                    }
                    .desc {
                        /*height: 90px;
                        overflow: hidden;
                        text-overflow: ellipsis;*/
                    }
                }
            }
        }
    }
</style>