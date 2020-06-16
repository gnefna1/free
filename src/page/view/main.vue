<template>
<div class='main'>
    <pageHead></pageHead>
    <sideBar></sideBar>
    <router-view class="view"></router-view>
</div>
</template>

<script>
import  pageHead  from "../../components/pageHead.vue";
import  sideBar  from "../../components/sideBar.vue";
export default {
    components:{
        pageHead,sideBar
    }
}
</script>

<style lang='less' scoped>
.main{
    // position: relative;
    height:100%;
    // overflow: hidden;
    .view{
       float: right;
       width:calc(100% - 210px);
       margin-top:50px;
       height:calc(100% - 50px);
       padding:20px;
    }
}
</style>