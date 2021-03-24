<!--
 * @Author: mojianpei
 * @description: 
 * @Date: 2020-08-01 16:38:45
 * @LastEditors: 莫靓仔
 * @LastEditTime: 2021-03-24 10:35:34
-->
<template>
    <div class="hello">
        <el-button @click="$router.push('/toolTip')">toolTip</el-button>
        <el-button @click="$router.push('/attrs')">使用$attrs</el-button>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
