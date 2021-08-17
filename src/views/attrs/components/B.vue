<!--
 * @Author: 莫靓仔
 * @description: 
 * @Date: 2021-03-24 10:36:47
 * @LastEditors: 莫靓仔
 * @LastEditTime: 2021-03-24 12:57:51
-->
<template>
    <div class="A">
        <p>B组件</p>
        <p>我接受的值：</p>
        <el-button @click="$listeners.changeName('嘻嘻嘻')">点击</el-button>
        <C v-bind="$attrs" v-on="$listeners"></C>
    </div>
</template>
<script>
import C from './C'
export default {
    components: { C },
    props: {
        name: {
            type: String
        }
    },
    data() {
        return {
            name1 : '555555'
        }
    },
    mounted() {
        this.name1 = 123456789
        console.log(9999, this.name1)
        // debugger
        console.log('listeners', this.$listeners)
        this.$listeners.changeName('123')
    }
}
</script>
<style lang="scss" scoped>
.A {
    border: 1px solid #000;
    width: 400px;
    height: 400px;
    > p {
        margin: 0;
    }
}
</style>