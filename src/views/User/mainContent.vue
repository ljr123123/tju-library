<template>
    <div class="mainContent">
        <div class="side-bar">
            <div class="user-info"></div>
            <div class="nav-bar">
                <div v-for="item in nav_list" :key="item.name" @click="navGo(item.path)">{{ item.name }}</div>
            </div>
            <p class="text-href log-out" @click="logOut()">退出登录</p>
        </div>
        <router-view></router-view>
    </div>
</template>

<script setup>
import { reactive } from "vue"
import { useRouter } from "vue-router";
import Cookies from "js-cookie"
const router = useRouter();
const nav_list = reactive([
    {name:"提交记录", path:"/user"},
    {name:"创建提交", path:"/user/submit"},
    {name:"个人信息", path:"/user/info"}
])

function navGo(path){
    router.push(path);
}

function logOut(){
    router.push("/login");
    Cookies.remove("username");
}
</script>

<style scoped>
.mainContent{
    height:100vh;
    width:100vw;
    
}
.side-bar{
    height:100vh;
    width:15vw;
    background: #00000010;
    position: fixed;
    top:0;
    left:0;
}
.log-out{
    position: absolute;
    bottom: 1%;
    left: 2%;
    cursor:pointer;
}
</style>