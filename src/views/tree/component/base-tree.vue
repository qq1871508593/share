<!--
 * @Author: 莫靓仔
 * @description: 
 * @Date: 2020-11-14 15:26:03
 * @LastEditors: 莫靓仔
 * @LastEditTime: 2021-04-23 11:44:46
-->
<template>
    <el-tree
        :data="treeData_arr"
        :show-checkbox="isShowCheckBox"
        :props="defaultProps_r"
        :node-key="nodeKey"
        :default-expanded-keys="defaultExpendLevel"
        @check="treeCheck"
        @check-change="treeCheckChange"
        @node-click="nodeClick"
        class="tree"
        :indent="0"
        :ref="`tree${treeData[nodeKey]}`"
        :key="`tree-key${treeData[nodeKey]}`"
    ></el-tree>
    <!-- ref不能是固定的，因为这个是循环出来的 -->
    <!-- 不能用default-checked-keys 这里其实是一个函数，每次状态改变都会去执行一次，会和其他函数冲突，具体原因不知 -->
    <!-- :default-checked-keys="defaultCheckKeys" -->
</template>
<script>
export default {
    props: {
        // 树的数据
        treeData: {
            type: [Object, Array],
            required: true
        },
        // 是否展示checkbox
        isShowCheckBox: {
            type: Boolean,
            default: true
        },
        // 树children
        propChildren: {
            type: String,
            default: 'children'
        },
        // 树label
        propLabel: {
            type: String,
            default: 'name'
        },
        // 唯一的key
        nodeKey: {
            type: String,
            default: 'id'
        },
        // 默认展开的层级，一级[1]，二级[2]，一级和三级[1,3]
        expandedLevel: {
            type: Array,
            default: () => [1]
        },
        // 用来判断选中的字段
        checkName: {
            type: String,
            default: 'check'
        },
        // 全选的标志
        checkAll: {
            type: [Boolean, String],
            default: false
        },
        // 监听父级【查看】的变化
        viewFlag: {
            type: Boolean
        },
        // 当dom结构完全一致时，重新渲染的标志
        updateFlag: {
            type: null
        },
        //是否检测treeData_arr变化，在用户详情会用到
        isUpdate: {
            type: Boolean,
            defailt: false
        }
    },
    model: {
        prop: 'treeData', // 貌似可以很随意
        event: 'change'
    },
    computed: {
        treeData_arr() {
            if (Object.prototype.toString.call(this.treeData) === '[object Object]') {
                return [this.treeData]
            } else {
                return this.treeData
            }
        },
        defaultProps_r() {
            return {
                children: this.propChildren,
                label: this.propLabel
            }
        },
        // 默认选中（初始状态）
        defaultCheckKeys() {
            let keysList = []
            this.circulData(this.treeData, (item) => {
                // 这里的父级check状态，接口拿到的数据跟el-tree的父级选中冲突，接口的数据是只要有一个子级选中，父级就是true，而el-tree的逻辑是只有全部子级选中，父级才是true
                // 只把子级为true的推进数组
                if (item[this.checkName] && this.noChildren(item)) {
                    keysList.push(item[this.nodeKey])
                }
            })
            return keysList
        },
        // 默认展开
        defaultExpendLevel() {
            let level = 1
            let expandedList = []

            this.circulData(this.treeData_arr, (item) => {
                if (this.isOkArr(item.children) && this.expandedLevel.includes(level)) {
                    expandedList.push(item[this.nodeKey])
                }
                level += 1
            })
            return expandedList
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        nodeClick(data, node, self) {
            // 如果是禁用，直接退出
            if (data.disabled) {
                return
            }
            // *************************************基础逻辑--勾选*********************************************************
            // 这里的逻辑覆盖的范围，其实就只有单独点击【查看】的逻辑，其他的情况下面都覆盖了
            node.checked = !node.checked
            // 然后设置dom的勾选，找到所有checked为true的id，设置setCheckedKeys
            let checkedList = node.parent.childNodes.map((item) => {
                if (item.checked) {
                    return item.data[this.nodeKey]
                }
            })
            // this.$refs.tree.setCheckedKeys(checkedList)
            this.$refs[`tree${this.treeData[this.nodeKey]}`].setCheckedKeys(checkedList)

            // *************************************非查看逻辑*********************************************************
            // 除了【查看】之外的列表
            let no_look_selectList = []
            // 保存【查看】的id
            let look_id = ''
            node.parent.childNodes.find((item) => {
                if (item.data.is_view) {
                    look_id = item.data[this.nodeKey]
                }
            })
            // 如果勾选了不是【查看】的节点，则把同级的【查看】勾上
            if (!data.is_view && node.checked) {
                node.parent.childNodes.forEach((item) => {
                    if (item.checked && !item.data.is_view) {
                        no_look_selectList.push(item.data[this.nodeKey])
                    }
                })
                // this.$refs.tree.setCheckedKeys([...no_look_selectList, look_id])
                this.$refs[`tree${this.treeData[this.nodeKey]}`].setCheckedKeys([...no_look_selectList, look_id])
            }

            // *************************************查看逻辑*********************************************************
            // 如果取消了【查看】，则全部取消
            // 这里的这部分逻辑，前提同样是treeData是两层结构，有时间再优化（找出所有checked为true的id，然后从中剔除当前点击节点的所有同级节点的id）
            if (data.is_view && !node.checked) {
                // this.$refs.tree.setCheckedKeys([])
                this.$refs[`tree${this.treeData[this.nodeKey]}`].setCheckedKeys([])
            }

            // *************************************基础逻辑--取消*********************************************************
            // 如果取消勾选，下级全部取消
            if (!node.checked) {
                let resList = []
                node.parent.childNodes.forEach((item) => {
                    if (item.checked) {
                        resList.push(item.data[this.nodeKey])
                    }
                })
                // this.$refs.tree.setCheckedKeys(resList)
                this.$refs[`tree${this.treeData[this.nodeKey]}`].setCheckedKeys(resList)
            }
            // 父级-更改查看状态，这里原则上是要根据父级节点的checked来更改的
            this.$emit('treeNodeClick', data, node.checked)
        },
        // 这个函数的前提是treeData只有两层数据结构，后期有需要可抽空优化
        treeCheck(item, checkObj) {
            // 点击的勾选框的选中状态
            let preCheck = checkObj.checkedKeys.includes(item[this.nodeKey])
            if (this.treeData.children && this.treeData.children.length > 0) {
                // 保存【查看】的id
                let lookItem = this.treeData.children.find((item) => item.is_view)
                let lookId = lookItem && lookItem[this.nodeKey]
                // 保存除了【查看】的id
                let look_else_id = []
                this.treeData.children.forEach((item) => {
                    if (!item.is_view) {
                        look_else_id.push(item[this.nodeKey])
                    }
                })
                // 点选【查看】以外的框，要连带把【查看】也勾上
                if (look_else_id.includes(item[this.nodeKey]) && preCheck) {
                    // this.$refs.tree.setCheckedKeys([...checkObj.checkedKeys, lookId])
                    this.$refs[`tree${this.treeData[this.nodeKey]}`].setCheckedKeys([...checkObj.checkedKeys, lookId])
                }
                // 如果取消了【查看】，其他的全部框取消勾选
                if (item[this.nodeKey] === lookId && !preCheck) {
                    // this.$refs.tree.setCheckedKeys([])
                    this.$refs[`tree${this.treeData[this.nodeKey]}`].setCheckedKeys([])
                }
            }
            this.$emit('treeCheckboxClick', item, preCheck)
        },
        // 选中状态改变
        treeCheckChange(item, isChecked, sonIsChecked) {
            // 目前只有一级，如果后期有多层级，可通过递归调用实现多层级的修改
            // 修改tree子级check
            this.treeData.children.forEach((child) => {
                if (child[this.nodeKey] === item[this.nodeKey]) {
                    child[this.checkName] = isChecked
                }
            })
            // 修改父级check
            this.treeData[this.checkName] = this.treeData.children.some((item) => item[this.checkName])
            this.$emit('change', this.treeData)
        },
        circulData(data, fn) {
            if (this.isOkArr(data)) {
                data.forEach((item) => {
                    fn(item)
                    if (this.isOkArr(item.children)) {
                        this.circulData(item.children, fn)
                    }
                })
            } else {
                this.circulData(data.children, fn)
            }
        },
        isOkArr(arr) {
            return arr && arr instanceof Array && arr.length > 0
        },
        noChildren(arr) {
            return !arr.children || (arr.children && arr.children instanceof Array && arr.children.length === 0)
        },
        // 初始化，默认选中
        init() {
            let keysList = []
            this.circulData(this.treeData_arr, (item) => {
                // 这里的父级check状态，接口拿到的数据跟el-tree的父级选中冲突，接口的数据是只要有一个子级选中，父级就是true，而el-tree的逻辑是只有全部子级选中，父级才是true
                // 只把子级为true的推进数组
                if (item[this.checkName] && this.noChildren(item)) {
                    keysList.push(item[this.nodeKey])
                }
            })
            // this.$refs.tree.setCheckedKeys(keysList)
            this.$refs[`tree${this.treeData[this.nodeKey]}`].setCheckedKeys(keysList)
        }
    },
    updated() {},
    watch: {
        updateFlag: {
            handler(val) {
                console.log('updateFlag变化', this.treeData.name)
                this.init()
            },
            deep: true
        },
        checkAll: {
            handler(val) {
                console.log('checkAll变化', this.treeData.name)
                let allIds = this.treeData.children.map((item) => {
                    if (!item.disabled) {
                        return item[this.nodeKey]
                    }
                })
                if (val === true) {
                    // this.$refs.tree.setCheckedKeys(allIds)
                    this.$refs[`tree${this.treeData[this.nodeKey]}`].setCheckedKeys(allIds)
                }
                if (val === false) {
                    // this.$refs.tree.setCheckedKeys([])
                    this.$refs[`tree${this.treeData[this.nodeKey]}`].setCheckedKeys([])
                }
            }
        },
        viewFlag: {
            handler(val) {
                console.log('viewFlag变化', this.treeData.name)
                if (val === false) {
                    // this.$refs.tree.setCheckedKeys([])
                    this.$refs[`tree${this.treeData[this.nodeKey]}`].setCheckedKeys([])
                }
            }
        },
        treeData_arr: {
            handler(val) {
                console.log('treeData_arr变化', this.treeData.name)
                if (this.isUpdate) {
                    this.init()
                }
            },
            deep: true
        }
    }
}
</script>
<style lang="scss" scoped>
.tree {
    &::v-deep .el-tree-node__content {
        padding-left: 0;
    }

    &::v-deep .is-expanded:after {
        border: none !important;
    }
    &::v-deep .is-expanded:before {
        border: none !important;
    }
    &::v-deep .el-tree-node {
        position: relative;
        padding-left: 0px;
    }
    &::v-deep .el-tree-node__children {
        padding-left: 30px;
    }

    &::v-deep .el-tree-node :last-child:before {
        height: 12px;
    }

    &::v-deep .el-tree > .el-tree-node:before {
        border-left: none;
    }

    &::v-deep .el-tree .el-tree-node:after {
        border-top: none;
    }
    //竖线
    &::v-deep .el-tree-node {
        .el-tree-node:before {
            content: '';
            left: -1px;
            position: absolute;
            right: auto;
            border-width: 1px;
            border-left: 1px dashed #cccccc;
            bottom: 0px;
            height: 100%;
            top: 0px;
            width: 1px;
        }

        .el-tree-node:last-child:before {
            height: 50%;
        }
        // 横线
        .el-tree-node:after {
            content: '';
            left: -1px;
            position: absolute;
            right: auto;
            border-width: 1px;
            border-top: 1px dashed #cccccc;
            height: 20px;
            top: 12px;
            width: 25px;
        }
    }
}
</style>