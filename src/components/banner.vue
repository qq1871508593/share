<!--
 * @Author: mojianpei
 * @description: 
 * @Date: 2020-08-03 16:56:51
 * @LastEditors: mojianpei
 * @LastEditTime: 2021-04-20 18:28:44
--> 
<template>
    <div>
        {{obj.name}}

    </div>
</template>
<script>
export default {
    name: 'banner',
    data() {
        return {
            obj: {}
        }
    },
    mounted() {
        setTimeout(() => {
            this.obj.name = '盛原成'
        }, 1000)
    },
    methods: {
        judgeNumber(a, b) {
        }
    }
}
</script>