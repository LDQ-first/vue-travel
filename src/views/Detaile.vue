<template>
    <div class="detail">
        <header :style="headerStyle">
            <h1 class="sname">{{detail.sname}}</h1>
            <h2 class="enname">{{detail.enname}}</h2>
            <span class="score">{{detail.score}}</span>
            <ul class="routers">
                <li v-for="(item, index) in routers" class="router" 
                @click="changeRouter(item.path, sid)">
                    {{item.name}}
                </li>
            </ul>
        </header>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { proxy, hotel, view, food, shop} from '../api'
    import axios from 'axios'

    export default {
        name: '',
        data() {
            return {
                detail: JSON.parse(localStorage.detail),
                sid: '',
                routers: [
                    {name: '景点', path: '/view'},
                    {name: '美食', path: '/food'},
                    {name: '购物', path: '/shop'},
                    {name: '酒店', path: '/hotel'},
                ]
            }
        },
        created() {
            this.sid = this.detail.sid
        },
        computed: {
            ...mapState({
                /*detail: state => state.home.detail */
            }),
            headerStyle() {
                return {
                    background: `url(${this.detail.pic_url}) no-repeat center/cover`
                } 
            }
        },
        methods: {
            changeRouter(path, sid) {
                console.log(path, sid)
                switch(path) {
                    case '/view': 
                        axios.get(view(sid))
                             .then(res => res.data.data)
                             .then(data => {
                                 console.log(data)
                             })
                    break;
                    case '/food': 
                        axios.get(food(sid))
                             .then(res => res.data.data)
                             .then(data => {
                                 console.log(data)
                             })
                    break;
                    case '/shop': 
                        axios.get(shop(sid))
                             .then(res => res.data.data)
                             .then(data => {
                                 console.log(data)
                             })
                    break;
                    case '/hotel': 
                        axios.get(hotel(sid))
                             .then(res => res.data.data)
                             .then(data => {
                                 console.log(data)
                             })
                    break;
                    default:
                    return;
                }

                this.$router.push({
                    path: path
                })
            }
        }
    }
</script>


<style lang="scss" scoped>
    .detail {
        header {
            height: 320px;
            color: #FFF;
            padding: 0.5em;
            padding-top: 50px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            position: relative;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 0;
                background: rgba(0, 0, 0, 0.2);
            }
            .sname {
                position: relative;
                z-index: 1;
            }
            .enname {
                position: relative;
                z-index: 1;
            }
            .score {
                position: relative;
                z-index: 1;
            }
            .routers {
                position: relative;
                z-index: 1;
                display: flex;
                width: 100%;
                justify-content: space-around;
                margin-top: 30px;
                .router {
                    border-radius: 50%;
                    width: 55px;
                    height: 55px;
                    border: 2px solid #FFF;
                    line-height: 55px;
                    font-weight: bold;
                }
            }
        }
    }
</style>