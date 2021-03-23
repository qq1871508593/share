<!--
 * @Author: mojianpei
 * @description: 
 * @Date: 2020-08-03 16:53:01
 * @LastEditors: mojianpei
 * @LastEditTime: 2020-11-06 00:20:01
--> 
<template>
    <div class="box">
        <el-button @click="toggle">动画</el-button>
        <transition name="draw">
            <!-- <div> -->
            <div class="a1" v-show="show">
                <div>
                    水电费水电费
                </div>
                <p>水电费水电费</p>
                <h1>水电费水电费</h1>
                <h1>水电费水电费</h1>
                <h1>水电费水电费</h1>
                <h1>水电费水电费</h1>
                <h1>水电费水电费</h1>
                <h1>水电费水电费</h1>
                <h1>水电费水电费</h1>
            </div>

            <!-- </div> -->
        </transition>
        <div class="a2"></div>
    </div>
</template>
<script>
export default {
    name: 'home',
    data() {
        return {
            show: true,
        }
    },
    created() {
        // let a = 444
        var Fun = {
            a: 1,
            b: function () {
                return this.a
            }
        }
        console.log(Fun.b())
        var c
        // var c = () => this.a
        // Fun.b.call(c)
        console.log(c)
    },
    methods: {
        toggle() {
            this.show = !this.show
        }
    }
}
</script>
<style scoped>
.a1 {
    width: 300px;
    /* height: 400px; */
    overflow: hidden;
    background: yellow;
    /* animation: down 0.5s ease-in; */
}
.a2 {
    width: 300px;
    height: 400px;
    background: blue;
}
.draw-enter-active,
.draw-leave-active {
    transition: all 0.5s ease;
    max-height: 500px;
}
.draw-enter,
.draw-leave-to {
    max-height: 0;
}
</style>