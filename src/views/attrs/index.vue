<!--
 * @Author: 莫靓仔
 * @description: 
 * @Date: 2021-03-24 10:36:21
 * @LastEditors: 莫靓仔
 * @LastEditTime: 2021-03-24 11:19:26
-->
<template>
    <div class="A">
        <A :name="name" :address="address" :id="id" :like="like" :doing="doing" @getList="getList" @changeName="changeName"></A>
    </div>
</template>
<script>
import A from './components/A'
export default {
    components: { A },
    data() {
        return {
            name: '小莫快跑',
            address: '保利大都汇A3',
            id: '9527',
            like: '吃好吃的',
            doing: '分享'
        }
    },
    methods: {
        getList() {
            alert('你执行了getList')
        },
        changeName(val) {
            alert('你执行了changeName')
            this.name = val
        }
    }
}
</script>
<style lang="scss" scoped>
.A {
    display: flex;
    justify-content: center;
    align-items: center;
    > p {
        margin: 0;
    }
}
</style>
