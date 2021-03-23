<!--
 * @Author: 莫靓仔
 * @description: 文本溢出显示tool-tip，不溢出不显示
 * @Date: 2021-03-12 17:12:10
 * @LastEditors: mojianpei
 * @LastEditTime: 2021-03-16 20:57:25
-->
<template>
    <div v-if="1" @mouseenter="tipBoxEnter($event)" @mouseleave="tipBoxLeave($event)">
        <p :class="['too-tip-content-p', optionMaxWidth ? 'max-width-' + optionMaxWidth : '']">
            <slot></slot>
        </p>
        <el-tooltip ref="tip" :content="toolTipContent"></el-tooltip>
    </div>
</template>
<script>
export default {
    props: {},
    components: { baseTool },
    methods: {
        tipBoxEnter(e) {
            let box = e.target
            // 获取option的内容
            let tipNode = box.querySelector('.too-tip-content-p')
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
        tipBoxLeave(e) {
            const tooltip = this.$refs.tip
            if (tooltip) {
                tooltip.setExpectedState(false)
                tooltip.handleClosePopper()
            }
        }
    }
}
</script>
