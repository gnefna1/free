<template>
    <div class="sideBar">
        sideBar
    </div>
</template>

<script>
export default {
    name:"sideBar"
}
</script>

<style lang="less">
@height:50px;
.sideBar{
    float:left;
    width: 210px;
    margin-top:50px;
    height:calc(100% - 50px);
    background:#2c364b;
    // text-align: center;
    // line-height: @height;
}
</style>
