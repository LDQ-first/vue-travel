<template>
    <div class="travel">
        <h1 class="travel-title">旅游</h1>
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
            <el-menu-item index="1" v-show='!user' @click="showSignUP">注册</el-menu-item>
            <el-menu-item index="2" v-if="user">{{user}}</el-menu-item>
            <el-menu-item index="3" v-else @click="showSignIN">登录</el-menu-item>
            <el-menu-item index="4" v-show="user" @click="logout">登出</el-menu-item>
        </el-menu>
        <search></search>
        <ul class="searchLists">
            <li class="searchList" v-for="(item, index) in searchLists" key="index" @click="detail(item.sid)">
                <img src="../assets/img/searchList.jpg" alt="" class="pic-url">
                <h3 class="sname">{{item.sname}}</h3>
            </li>
        </ul>




     <modal :mdShow="isShowSignUP" @close="closeModal('signup')">
        <h3 slot="title">注册</h3>
        <div slot="message">
            <ul class="lists">
                <li class="list">
                    <span class="list-item" >用户名</span>
                    <input class="list-input" type="text" v-model="formData.username">
                </li>
                <li class="list">
                    <span class="list-item" >密码</span>
                    <input class="list-input" type="password" v-model="formData.password">
                </li>
            </ul>
        </div>
        <div slot="btnGroup" class="btnGroup">
            <button class="md-close" @click="signUP();closeModal('signup')">确定</button>
            <button class="md-close" @click="closeModal('signup')">取消</button>
        </div>
    </modal>
     <modal :mdShow="isShowSignIN" @close="closeModal('signin')">
        <h3 slot="title">登录</h3>
        <div slot="message">
            <ul class="lists">
                <li class="list">
                    <span class="list-item" >用户名</span>
                    <input class="list-input" type="text" v-model="formData.username">
                </li>
                <li class="list">
                    <span class="list-item" >密码</span>
                    <input class="list-input" type="password" v-model="formData.password">
                </li>
            </ul>
        </div>
        <div slot="btnGroup" class="btnGroup">
            <button class="md-close" @click="signIN();closeModal('signin')">登录</button>
            <button class="md-close" @click="closeModal('signin')">取消</button>
        </div>
    </modal>
    </div>
</template>

<script>
    /*import getAVUser from '../lib/getAVUser'*/
    import AV from '../lib/leancloud'
    import Search from '../components/Search.vue'
    import { mapState } from 'vuex'
    import { proxy, detail } from '../api'
    import axios from 'axios'

    export default {
        name: 'Home',
        data() {
            return {
                 activeIndex: '1',
                 user: localStorage.getItem('username') || '',
                 isShowSignUP: false,
                 isShowSignIN: false,
                 formData: {
                    username: '',
                    password: ''
                },
                proxy: proxy,
                
                 
            }
        },
        created() {

        },
        computed: {
            ...mapState({
                searchLists: state => state.home.search
            })
        },
        components: {
            Search
        },
        methods: {
            detail(sid) {
                axios.get(detail(sid))
                     .then((res) => res.data.data)
                     .then(data => {
                         this.$store.commit('setDetail', data.scene_info)
                         console.log(data.scene_info)
                         this.$router.push({path: '/detail'})
                         localStorage.detail = JSON.stringify(data.scene_info)
                     })
            },
            logout() {
                this.user = ''
                localStorage.setItem('username', '')
            },
            showSignUP() {
                this.formData = {
                    username: '',
                    password: ''
                }
                this.isShowSignUP = true
            },
            signUP () {
                let user = new AV.User();
                user.setUsername(this.formData.username);
                user.setPassword(this.formData.password);
                user.signUp().then(function (loginedUser) {
                        console.log(loginedUser);
                    }, function (error) {
                        console.log(error);
                });
            },
            showSignIN () {
                this.formData = {
                    username: '',
                    password: ''
                }
                this.isShowSignIN = true
            },
            signIN () {
                AV.User.logIn(this.formData.username, this.formData.password)
                .then((loginedUser) => { 
                    this.user = this.getCurrentUser().username
                    localStorage.setItem('username', this.user)
                }, function (error) {
                    console.log('登录失败') 
                });
            },
            getCurrentUser: function () { // 
                let {id, createdAt, attributes: {username}} = AV.User.current()
                return {id, username, createdAt} 
            },
            closeModal(item) {
                switch(item) {
                    case 'signup': 
                        this.isShowSignUP = false
                    case 'signin':
                        this.isShowSignIN = false
                }
            },
            
        }
    }
</script>


<style lang="scss">
    .travel {
        .travel-title {

        }
    }
    .el-menu {
        display: flex;
        justify-content: center;
    }
    .btnGroup {
        display: flex;
        justify-content: space-around;
        margin: 20px 0;
    }
    .lists {
        margin: 1em;
        .list {
            margin: 1em 0;
            display: flex;
            .list-item {
                display: inline-block;
                min-width: 50px;
                text-align: right;
                margin-right: 1em;
            }
            .list-input {
                flex: 1;
                padding: 0.5em 1em;
                background: #A7E5E9;
                @media (max-width: 415px) {
                    padding: 0.5em;
                }
            }
        }
    }
    .md-content {
        min-width: 320px;
    }
    .searchLists {

        .searchList {
            padding: 1em 0.5em;
            border-bottom: 2px solid #CCC;
            display: flex;
            .pic-url {
              padding-right: 1em;
              width: 110px;
              height: 60px;
            }
            .sname {
                color: #55CDD5;
            }
        }
    }
</style>