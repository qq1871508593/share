<!--
 * @Author: mojianpei
 * @description: 
 * @Date: 2020-08-03 16:53:01
 * @LastEditors: mojianpei
 * @LastEditTime: 2020-09-13 23:17:02
--> 
<template>
  <div class="box">
    <el-button @click="show = !show"></el-button>
    <div class="a1" v-if="show"></div>
    <div class="a2"></div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      show: true
    }
  }
}
</script>
<style scoped>
.a1 {
  width: 300px;
  height: 400px;
  background: red;
}
.a2 {
  width: 300px;
  height: 400px;
  background: blue;
}
</style>