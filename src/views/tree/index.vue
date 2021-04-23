<!--
 * @Author: 莫靓仔
 * @description: 
 * @Date: 2021-04-23 09:51:25
 * @LastEditors: 莫靓仔
 * @LastEditTime: 2021-04-23 11:46:02
-->
<template>
    <div class="box">
        头：
        <h1>
            <el-checkbox v-model="isOpen" style="margin-right: 10px" :label="dataObj.name" @change="handeModuleOpne">{{
                dataObj.name
            }}</el-checkbox>
        </h1>
        <div class="box1" v-for="(rootItem, rootIndex) in dataObj.children" :key="rootIndex">
            <!-- <base-tree :list="[rootItem]"></base-tree> -->
            <base-tree
                v-model="dataObj.children[rootIndex]"
                :treeData="rootItem"
                :checkName="'isCheck'"
                :expandedLevel="[1]"
                :checkAll="rootItem.checkAll"
                :key="`base-tree-key${rootItem.id}`"
                :viewFlag="dataObj.children.filter(item => item.is_view).isCheck"
            >
            </base-tree>
        </div>
    </div>
</template>
<script>
import baseTree from './component/base-tree'
import a from './a.json'
export default {
    components: { baseTree },
    data() {
        return {
            list: [
                {
                    id: 1,
                    label: '第一个一级 1',
                    checkAll: false,
                    children: [
                        {
                            id: 4,
                            label: '二级 1-1',
                            children: [
                                {
                                    id: 9,
                                    label: '三级 1-1-1'
                                },
                                {
                                    id: 10,
                                    label: '三级 1-1-2'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    label: '第二个一级 2',
                    checkAll: false,
                    children: [
                        {
                            id: 5,
                            label: '二级 2-1'
                        },
                        {
                            id: 6,
                            label: '二级 2-2'
                        }
                    ]
                },
                {
                    id: 3,
                    label: '第三个一级 3',
                    checkAll: false,
                    children: [
                        {
                            id: 7,
                            label: '二级 3-1'
                        },
                        {
                            id: 8,
                            label: '二级 3-2'
                        }
                    ]
                }
            ],
            isOpen: true,
            dataObj: {},
            toolTipContent: ''
        }
    },
    created() {
        this.dataObj = this.$clone(a)
    },
    methods: {
        treeNodeClick() {},
        treeCheckboxClick(item, checked, rootItem) {
            // 如果el-tree的全部子节点都是选中，则checkAll是true，全部取消则false，否则half
            if (rootItem.children.every(c => c.isCheck)) {
                rootItem.checkAll = true
            } else if (rootItem.children.every(c => !c.isCheck)) {
                rootItem.checkAll = false
            } else {
                rootItem.checkAll = 'half'
            }
            // this.changeViewItem(rootItem.is_view, rootItem.isCheck)
            this.changeParent()
        },
        changeViewItem(is_view, checked) {
            let viewItem = this.dataObj.children.find(item => item.is_view)
            if (!is_view && checked) {
                viewItem.isCheck = true
            }
            if (is_view && !checked) {
                this.dataObj.children.forEach(item => {
                    item.isCheck = false
                    item.checkAll = false
                    if (item.children && item.children.length) {
                        item.children.forEach(child => {
                            child.isCheck = false
                        })
                    }
                })
            }
        },
        changeParent() {
            if (!(this.dataObj.children && this.dataObj.children.length)) {
                return
            }
            let noCheck = this.dataObj.children.every(item => !item.isCheck)
            if (noCheck) {
                this.isOpen = false
                this.dataObj.isCheck = false
            } else {
                this.isOpen = true
                this.dataObj.isCheck = true
            }
        },
        handeModuleOpne(val) {
            this.dataObj.isCheck = val
            this.dataObj.checkAll = val
            this.dataObj.children.forEach(item => {
                item.isCheck = val
                item.checkAll = val
                if (item.children instanceof Array && item.children.length) {
                    item.children.forEach(child => {
                        child.isCheck = val
                        child.checkAll = val
                    })
                }
            })
        }
    }
}
</script>
<style scoped>
.box {
    display: flex;
    justify-content: flex-start;
    align-content: center;
    flex-wrap: wrap;
    width: 100vw;
    height: 100vh;
}
.box1,
.box2,
.box3 {
    /* flex: 1; */
    height: 100%;
    overflow: hidden;
    padding: 20px;
    margin-right: 50px;
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
