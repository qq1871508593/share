<!--
 * @Author: 莫靓仔
 * @description: 文件描述
 * @Date: 2021-08-13 16:25:38
 * @LastEditors: 莫靓仔
 * @LastEditTime: 2021-08-13 16:57:02
-->
<template>
    <editor class="editor" :value="lessonDetail"></editor>
</template>
<script>
import editor from './editor'
export default {
    components: { editor },
    data() {
        return {
            lessonDetail: ''
        }
    }
}
</script>
