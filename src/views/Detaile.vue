<template>
    <div class="detail">
        <header :style="headerStyle">
            <h1 class="sname">{{detail.sname}}</h1>
            <h2 class="enname">{{detail.enname}}</h2>
            <span class="score">{{detail.score}}</span>
            <ul>
                <li ></li>
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
                sid: ''
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
                switch(path) {
                    case 'view': 
                        axios.get(view(sid))
                             .then(res => res.data.data)
                             .then(data => {
                                 console.log(data)
                             })
                    break;
                    case 'food': 
                        axios.get(food(sid))
                             .then(res => res.data.data)
                             .then(data => {
                                 console.log(data)
                             })
                    break;
                    case 'shop': 
                        axios.get(shop(sid))
                             .then(res => res.data.data)
                             .then(data => {
                                 console.log(data)
                             })
                    break;
                    case 'hotel': 
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
            .sname {
                
            }
            .enname {

            }
            .score {

            }
        }
    }
</style>