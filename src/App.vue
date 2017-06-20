<template>
<div id="app">
    <router-view>
      
    </router-view>
</div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="less">
// 由于 APP.vue 是有所有页面的入口， 所以公共的部分都放在这里
// 这里恰好是相同的
// 不用别名的情况下 得根据本文件的路径去找
// 引入文件时后缀名可以省略
// css 后面得有 这叫什么符号来着？  分号
@import 'less/common/index';
</style>
