<template>
    <div class="login">
        <div class="left-box">
            <div class="info-alert">
                <p class="text-h2 alert-title">这是一些注意事项</p>
                <p class="text-normal alert">注意事项1:XXXXXXXXXXX</p>
                <p class="text-normal alert">注意事项1:XXXXXXXXXXX</p>
                <p class="text-normal alert">注意事项1:XXXXXXXXXXX</p>
                <p class="text-normal alert">注意事项1:XXXXXXXXXXX</p>
                <p class="text-normal alert">注意事项1:XXXXXXXXXXX</p>
            </div>
        </div>
        <div class="right-box">
            <p class="text-h1 page-title">某信息审核系统</p>
            <div class="login-box">
                <p class="text-h1 welcome">欢迎回来</p>
                <label class="input-box">
                    <input type="text" placeholder="请输入用户名" v-model="username" class="input"/>
                </label>
                <label class="input-box">
                    <input type="passoword" placeholder="请输入密码" v-model="password" class="input"/>
                </label>
                <button class="big-button login-button" @click="login()">登陆</button>
                <div class="bottom-box">
                    <p class="text-href">注册账号</p>
                    <p class="text-href">忘记密码</p>
                    <p class="text-href" @click="changeUser()"
                    >{{ `${login_type == "user"? "管理员":"用户"}登陆` }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue"
import Cookies from "js-cookie";
const router = useRouter();
const username = ref("");
const password = ref("");
const login_type = ref("user"); 

async function login(){
    if(login_type.value == "user"){
        if(password.value == "123" && username.value == "Jerry"){
            Cookies.set("username", username.value);
            router.push("/user");

        }
        else alert("用户名或密码错误!");
    }
    else{
        if(password.value == "123" && username.value == "Jerry"){
            router.push("/admin")
        }
        else alert("用户名或密码错误!");
    }
}

function changeUser(){
    login_type.value == "user"? login_type.value = "admin" : login_type.value = "user";
}
</script>

<style scoped>
.login{
    height:100vh;
    width:100vw;
    display: flex;
    flex-direction: row;
}
.left-box, .right-box{
    height:100vh;
    width:50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.left-box{
    background-image: url("@/assets/login-left.png");
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center;
}
.info-alert{
    background:#FFFFFF;
    height:50vh;
    width:30vw;
    box-shadow: 0 0 5px #00000020;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
}
.alert-title{
    margin: 5%;
}
.alert{
    margin: 2.5%;
    width:90%;
}
.login-box{
    height:50vh;
    width:30vw;
    box-shadow: 0 0 5px #00000020;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    position: relative;
    background: rgba(135, 207, 235, 0.3);
}
.bottom-box{
    position: absolute;
    bottom: 2%;
    display: flex;
    justify-content: space-evenly;
    width:100%;
}
.welcome{
    margin:5%;
}
.input-box{
    display: flex;
    width:80%;
    height:40px;
    margin:5%;
}
.input{
    width:100%;
    font-size: 16px;
}
.login-button{
    margin:5%;
}
.page-title{
    position: absolute;
    width:40%;
    left:30%;
    top:10%;
    text-align: center;
}
</style>