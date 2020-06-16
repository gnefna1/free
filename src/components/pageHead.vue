<template>
    <div class="pageHead">
        afei
    </div>
</template>

<script>
export default {
    name:"pageHead"
}
</script>

<style lang="less">
@height:50px;
.pageHead{
    position: fixed;
    z-index:100000000000;
    top:0;
    width: 100%;
    height: @height;
    background:#11a0f8;
    text-align: center;
    line-height: @height;
}
</style>
