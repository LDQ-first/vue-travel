<template>
    <div class="search">
        <div class="searchArea">
            <input type="text" v-model="searchValue" class="input">
            <span @click="clear" class="clear">×</span>
            <button @click="search">搜索</button>
        </div>
        <ul class="baselists">
            <li v-for="(item, index) in base" key="index" class="baselist">
                <img :src="item.img" alt="" class="img">
                <div class="desc">
                     <h4 class="title">{{item.name}}</h4>
                     <p class="info">{{item.info}}</p>
                     <span class="like">{{item.like}}</span>
                     <span class="travel">{{item.travel}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {search as _search } from '../api'
    import axios from 'axios'


    export default {
        name: 'search',
        data() {
            return {
                searchValue: '',
                base: [
                    {
                        name: '黄山',
                        info: '云海中的惊世图腾',
                        like: '5012人',
                        travel: '50757次',
                        img: '//gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/baidu/pic/item/ca1349540923dd543317a04cda09b3de9c8248a9.jpg'
                    },
                    {
                        name: '张掖',
                        info: '一湖山光，半城塔影',
                        like: '289人',
                        travel: '20759次',
                        img: '//gss0.bdstatic.com/8vo3dSag_xI4khGko9WTAnF6hhy/baidu/pic/item/b03533fa828ba61edc83cf0b4a34970a304e59a0.jpg'
                    },
                    {
                        name: '台北',
                        info: '老传统与小清新',
                        like: '1103人',
                        travel: '28154次',
                        img: '//gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/baidu/pic/item/e850352ac65c10387683cae6b9119313b07e8910.jpg'
                    },
                    {
                        name: '西湖',
                        info: '太子湾，百花齐放',
                        like: '2064人',
                        travel: '19397次',
                        img: '//gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/baidu/pic/item/0ff41bd5ad6eddc4cad5b0df32dbb6fd526633e7.jpg'
                    },
                    {
                        name: '大理',
                        info: '苍山洱海，蝴蝶泉边',
                        like: '2195人',
                        travel: '84951次',
                        img: '//gss0.bdstatic.com/5fo3dSag_xI4khGko9WTAnF6hhy/baidu/pic/item/8601a18b87d6277f441e361c23381f30e924fc82.jpg'
                    },
                ]
            }
        },
        methods: {
            search() {
                axios.get(_search(this.searchValue))
                     .then((res) => res.data.data)
                     .then( data => {
                         if(data.scene_list && data.scene_list.length) {
                            /* console.log(data.scene_list)*/
                             this.$store.commit('setSearch', data.scene_list)
                         }
                     })
            },
            clear() {
                this.searchValue = ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search {
        display: flex;
        flex-direction: column;
        .searchArea {
            display: flex;
            .input {
                background: #A7E5E9;
                padding: 0.5em;
                flex: 1;
            }
            .clear {
                padding: 0 0.5em;
                display: flex;
                align-items: center;
                background: #A7E5E9;

            }
            .search {

            }
        }
        .baselists {
            .baselist {
                display: flex;
                padding: 1em;
                border-bottom: 1px solid #CCC;
                .img {
                    width: 114px;
                    height: 72px;
                    
                }
                .desc {
                    margin-left: 1em;
                    .title {

                    }
                    .info {

                    }
                    .like {
                        color: #f28e01;
                    }
                    .travel {
                        color: #f28e01;
                    }
                }
                
            }
        }
        
    }
</style>