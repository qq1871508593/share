<!--
 * @Author: mojianpei
 * @description: 
 * @Date: 2020-08-03 19:34:19
 * @LastEditors: mojianpei
 * @LastEditTime: 2021-04-14 20:09:10
--> 
<template>
  <div class="aa">
    我是name
    <ul id="box">
      <li>蚂蚁部落一</li>
      <li>蚂蚁部落二</li>
      <li>蚂蚁部落三</li>
      <li>蚂蚁部落四</li>
    </ul>
    <el-button @click="$router.push('/user')">去user</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: 0,
      b: 0
    }
  },
  created() {
    // console.log(this.$store.getters.say);

    // console.assert(false, '判断为false才显示的信息');

    // console.table([['中国', '美国'], ['好']]);

    // console.log('%c名字是' + '%c什么呢', 'color: red', 'color: green');

    // console.log("%d年%d月%d日", 2011, 3, 26);
    // console.log("圆周率是%f", 3.1415926);

    // var dog = {};
    // dog.name = "大毛";
    // dog.color = "黄色";
    // console.log("%o", dog);
    // console.log("%O", dog);

    // console.group("第一组信息");

    // console.log("第一组第一条");

    // console.log("第一组第二条");

    // console.groupEnd();

    // console.group("第二组信息");

    // console.log("第二组第一条");

    // console.log("第二组第二条");

    // console.groupEnd();
    debugger    
    
    console.profile('性能分析器一');
    // this.Foo();
    console.profileEnd();

    // console.log('%c ', 'background-image:url("../assets/logo.png");background-size:100% 100%;background-repeat:no-repeat;background-position:center center;line-height:200px;padding:100px 100px;');
    // console.log('%c ', 'background-image:url("http://iyeslogo.orbrand.com/150902Google/005.gif");background-size:120% 120%;background-repeat:no-repeat;background-position:center center;line-height:60px;padding:30px 120px;');

  },
  mounted() {
    // var aa = document.getElementsByClassName('aa');
    // console.dirxml(123, aa);
    // var obox = document.getElementById("box");
    // console.dirxml(obox);
  },
  methods: {
    test1() {
      // console.time();
      for (var i = 0; i < 10000; i++) {
        this.a += i;
      }
      return this.a;
    },
    async test2() {
      this.b = await this.test1();
      // console.timeEnd();      
    },
    Foo() {
      for (var i = 0; i < 10; i++) { this.funcA(100); }
      this.funcB(100);
    },

    funcA(count) {
      for (var i = 0; i < count; i++) {
        var a = 1;
        a += 1;
        console.log(a);
      }
    },

    funcB(count) {
      for (var i = 0; i < count; i++) {
        var b = 1;
        b += 1;
        console.log(b);
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    console.clear();
    next();
  }
}
</script>