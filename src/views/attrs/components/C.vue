<!--
 * @Author: 莫靓仔
 * @description: 
 * @Date: 2021-03-24 10:36:51
 * @LastEditors: 莫靓仔
 * @LastEditTime: 2021-03-24 11:20:02
-->
<template>
    <div class="A">
        <p>C组件</p>
        <p>我接受的值：{{$attrs.id}}</p>
        <el-button @click="$listeners.changeName('哈哈哈')">点击</el-button>
    </div>
</template>
<script>
export default {
    props: {
        doing: {
            type: String
        }
    },
    mounted() {
        console.log('listeners', this.$listeners)
    }
}
</script>
<style lang="scss" scoped>
.A {
    width: 300px;
    height: 300px;
    border: 1px solid #000;
    > p {
        margin: 0;
    }
}
</style>