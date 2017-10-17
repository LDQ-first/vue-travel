<template>
    <div class="travel">
        <h1 class="travel-title">旅游</h1>
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
            <el-menu-item index="1" v-show='!user' @click="showSignUP">注册</el-menu-item>
            <el-menu-item index="2" v-if="user">{{user}}</el-menu-item>
            <el-menu-item index="3" v-else @click="showSignIN">登录</el-menu-item>
        </el-menu>
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
    export default {
        name: 'Home',
        data() {
            return {
                 activeIndex: '1',
                 user: '',
                 isShowSignUP: false,
                 isShowSignIN: false,
                 formData: {
                    username: '',
                    password: ''
                }
                 /*signUPArr: [
                    {name: '用户名', value: ''},
                    {name: '密码', value: ''},
                 ],
                 signINArr: [
                    {name: '用户名', value: ''},
                    {name: '密码', value: ''},
                 ],*/
            }
        },
        created() {

        },
        computed: {

        },
        methods: {
            showSignUP() {
                this.formData = {
                    username: '',
                    password: ''
                }
                this.isShowSignUP = true
            },
            signUP() {

            },
            showSignIN() {
                this.formData = {
                    username: '',
                    password: ''
                }
                this.isShowSignIN = true
            },
            singIN() {

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


<style scoped lang="scss">
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
                width: 60px;
                text-align: right;
                margin-right: 1em;
            }
            .list-input {
                flex: 1;
                padding: 0.5em 2em;
                background: #A7E5E9;
            }
        }
    }
</style>