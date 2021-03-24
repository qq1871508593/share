<!--
 * @Author: 莫靓仔
 * @description: 
 * @Date: 2021-03-24 10:36:32
 * @LastEditors: 莫靓仔
 * @LastEditTime: 2021-03-24 11:14:18
-->
<template>
    <div class="A">
        <p>A组件</p>
        <p>我接受的值：</p>
        <B v-bind="$attrs" v-on="$listeners"></B>
    </div>
</template>
<script>
import B from './B'
export default {
    components: { B },
    data() {
        return {
            name: '小莫快跑',
            address: '保利大都汇A3',
            id: '9527',
            like: '吃好吃的',
            doing: '分享'
        }
    }
}
</script>
<style lang="scss" scoped>
.A {
    border: 1px solid #000;
    width: 500px;
    height: 500px;
    > p {
        margin: 0;
    }
}
</style>