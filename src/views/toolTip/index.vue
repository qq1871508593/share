<!--
 * @Author: mojianpei
 * @description: 
 * @Date: 2021-03-16 20:41:52
 * @LastEditors: mojianpei
 * @LastEditTime: 2021-04-15 15:59:16
-->
<template>
    <div class="box">
        <div class="box1">
            <p v-for="(item, index) in list" :key="index">{{item.title}}</p>
            <name></name>
        </div>
        <div class="box2">
            <el-tooltip :placement="'top-start'" v-for="(item, index) in list" :key="index">
                <p>{{ item.title }}</p>
                <div slot="content">
                    <p>
                        {{ item.title }}
                    </p>
                </div>
            </el-tooltip>
        </div>
        <div class="box3">
            <p class="too-tip-content-p" @mouseenter="tipBoxEnter($event)" @mouseleave="tipBoxLeave($event)"
                v-for="(item, index) in list" :key="index">{{item.title}}</p>
            <el-tooltip ref="tip" :content="toolTipContent"></el-tooltip>
        </div>
    </div>
</template>
<script>
// import baseTool from 'cmt/base-tool'
import Name from '@/components/name'
export default {
    components: { Name },
    created() {
        console.log(1237)
        console.log(1236)
        console.log(1235)
        console.log(1233)
    },
    data() {
        return {
            list: [
                {
                    title: 'sdfs， 水电费是，地方是，是的，发，是的，发阿尔无法阿萨德撒旦法按时，，是的，法师，的发，是，的发'
                },
                {
                    title: 's撒旦发送到'
                },
                {
                    title: 's，的发'
                },
                {
                    title: 'sdfs， 水电费是，地方是，是的，是的，法师，的发，是，的发'
                },
                {
                    title: 'sd，的发'
                },
                {
                    title: 'sdfs， 水电费是，地方是师，的发，是，的发'
                }
            ],
            toolTipContent: ''
        }
    },
    methods: {
        tipBoxEnter(e) {
            let tipNode = e.target
            // 获取option的内容
            // let tipNode = box.querySelector('.too-tip-content-p')
            // 如果文本溢出
            if (tipNode.scrollWidth > tipNode.offsetWidth) {
                const tooltip = this.$refs.tip
                // 获取option的文本内容
                this.toolTipContent = tipNode.innerText
                // 挂载显示的内容
                tooltip.referenceElm = tipNode
                // 先消掉之前的
                tooltip.$refs.popper && (tooltip.$refs.popper.style.display = 'none')
                tooltip.doDestroy()
                tooltip.setExpectedState(true)
                // 展示新的tool-tip
                this.activateTooltip(tooltip)
            }
        },
        tipBoxLeave() {
            const tooltip = this.$refs.tip
            if (tooltip) {
                tooltip.setExpectedState(false)
                tooltip.handleClosePopper()
            }
        },
        activateTooltip(tooltip) {
            tooltip.handleShowPopper()
        }
    }

}
</script>
<style scoped>
.box {
    display: flex;
    justify-content: space-around;
    align-content: center;
    width: 100vw;
    height: 100vh;
}
.box1,
.box2,
.box3 {
    flex: 1;
    height: 100%;
    overflow: hidden;
    padding: 20px;
    border-right: 1px solid red;
}
p {
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 20px;
}
</style>