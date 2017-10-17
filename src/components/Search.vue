<template>
    <div class="search">
        <input type="text" v-model="searchValue" class="input">
        <button @click="search">搜索</button>
    </div>
</template>

<script>
    import {search as _search } from '../api'
    import axios from 'axios'

    export default {
        name: 'search',
        data() {
            return {
                searchValue: ''
            }
        },
        methods: {
            search() {
                axios.get(_search(this.searchValue))
                     .then((res) => res.data.data)
                     .then( data => {
                         if(data.scene_list && data.scene_list.length) {
                             console.log(data.scene_list)
                         }
                     })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search {
        display: flex;
        .input {
            background: #A7E5E9;
            padding: 0.5em;
            flex: 1;
        }
        .search {

        }
    }
</style>