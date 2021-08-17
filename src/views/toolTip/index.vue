<!--
 * @Author: mojianpei
 * @description: 
 * @Date: 2021-03-16 20:41:52
 * @LastEditors: 莫靓仔
 * @LastEditTime: 2021-08-11 18:18:37
-->
<template>
    <div class="aa">
        <ve-line :data="chartData"></ve-line>
        <!-- <div class="box1">
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
        </div> -->
        <!-- <div class="box3">
            <p class="too-tip-content-p" @mouseenter="tipBoxEnter($event)" @mouseleave="tipBoxLeave($event)"
                v-for="(item, index) in list" :key="index">{{item.title}}</p>
            <el-tooltip ref="tip" :content="toolTipContent"></el-tooltip>
        </div> -->
    </div>
</template>
<script>
// import baseTool from 'cmt/base-tool'
// import Name from '@/components/name'
export default {
    // components: { Name },
    data() {
        return {
            chartData: {
                columns: ['日期', '访问用户', '下单用户', '下单率'],
                rows: [
                    { 日期: '1/1', 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
                    { 日期: '1/2', 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
                    { 日期: '1/3', 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
                    { 日期: '1/4', 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
                    { 日期: '1/5', 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
                    { 日期: '1/6', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
                ]
            },
            list1: [
                {
                    title:
                        'sdfs， 水电费是，地方是，是的，发，是的，发阿尔无法阿萨德撒旦法按时，，是的，法师，的发，是，的发'
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
            list: [
                {
                    title: 'sdfs， sdfasd 水电费阿斯蒂芬阿斯蒂芬水电费说过话金龟换酒规划局规划局给对方工单d'
                },
                {
                    title: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊'
                },
                {
                    title: 'ddddd顶ddddd顶顶顶顶ddddd顶顶顶顶ddddd顶顶顶顶ddddd顶顶顶顶ddddd顶顶顶顶顶顶顶'
                },
                {
                    title: 'sdfs， 咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕'
                },
                {
                    title: 'sd，少sd，少时诵诗书的发sd，少时诵诗书的发sd，少时诵诗书的发sd，少时诵诗书的发时诵诗书的发'
                },
                {
                    title: 'sdfs， 凄凄凄切切群凄凄切切群凄凄切切群凄凄切切群凄凄切切群凄凄切切群凄凄切切群凄切切群'
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
