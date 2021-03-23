<!--
 * @Author: mojianpei
 * @description: 
 * @Date: 2020-08-03 19:34:19
 * @LastEditors: mojianpei
 * @LastEditTime: 2020-08-17 00:21:51
--> 
<template>
  <el-container class="aa">
    <el-header class="header">header</el-header>
    <el-container>
      <el-aside class="aside">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main">main</el-main>
    </el-container>
  </el-container>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped lang="less">
.aa {
  height: 100vh;
  font-size: 15px;
}
.header {
  background: #212121;
  color: #fff;
}
.aside {
  background: #3a3a3a;
  color: #fff;
  /* height: 100%; */
}
.main {
  /* height: 100%; */
  color: #212121;
}
</style>
