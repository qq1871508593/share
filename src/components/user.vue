<!--
 * @Author: mojianpei
 * @description: 
 * @Date: 2020-08-03 19:34:19
 * @LastEditors: mojianpei
 * @LastEditTime: 2020-11-06 00:20:22
--> 
<template>
  <div>
    <el-button @click="$router.push('/name')">去name</el-button>
    我是user
    <div>name: {{name}}</div>
    <div>sex: {{sex}}</div>
    <div>say: {{say}}</div>
    <div>obj: {{obj.name}}</div>
    <div>
      <el-button @click="changeName">改变名字{{nameCount}}</el-button>
      <el-button @click="changeSex">改变性别{{sexCount}}</el-button>
      <el-button @click="changeLike">改变爱好{{moneyCount}}</el-button>
      <el-button @click="changeMoney">改变余额{{likeCount}}</el-button>
      <el-button @click="changeObj">改变obj{{obj.name}}</el-button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex';
export default {
  data() {
    return {
      nameCount: 0,
      sexCount: 0,
      moneyCount: 0,
      likeCount: 0,
      obj: {
        // name: ''
      },
    }
  },
  computed: {
    ...mapState(['name', 'sex']),
    ...mapGetters(['say'])
  },
  methods: {
    // ...mapMutations(['set_name']),
    ...mapMutations({ setNameMut: 'set_name', setSexMut: 'set_sex', setLikeMut: 'set_like', addMoneyMut: 'add_money' }),
    ...mapActions(['setName', 'addMoney', 'setLike', 'setSex']),
    changeName() {
      // this.setNameMut({ name: '隔壁老李' });
      this.setName({ name: '隔壁老李' });
      this.nameCount += 1;
    },
    changeObj() {
      this.obj.name = 'ssss'
      // this.$set(this.obj, 'name', 'dddd')
      console.log(this.obj.name)
    },
    changeSex() {
      // this.setSexMut({ sex: '女' });
      this.setSex({ sex: '女' });
      this.sexCount += 1;
    },
    changeLike() {
      // this.setLikeMut({ like: '啪啪啪' });
      this.setLike({ like: '啪啪啪' });
      this.moneyCount += 1;
    },
    changeMoney() {
      // this.addMoneyMut();
      this.addMoney();
      this.likeCount += 1;
    },
  },
  beforeRouteLeave(to, from, next) {
    console.clear();
    next();
  }
}
</script>