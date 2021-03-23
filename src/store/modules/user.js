/*
 * @Author: mojianpei
 * @description:
 * @Date: 2020-08-03 20:18:12
 * @LastEditors: mojianpei
 * @LastEditTime: 2020-08-04 01:25:59
 */

// 状态
const state = {
  name: "隔壁老王",
  sex: "男",
  like: ["嘿嘿嘿"],
  money: 100,
};

// 状态方法
const mutations = {
  set_name(state, payload) {
    console.warn("payload", payload);
    console.log("%c名字是%c", +payload, "color: red", "color: green");
    state.name = payload.name;
  },
  set_sex(state, payload) {
    state.sex = payload.sex;
  },
  set_like(state, payload) {
    state.like.push(payload.like);
  },
  add_money(state) {
    state.money += 1;
  },
};
const actions = {
  // setName(context, payload) {
  //   context.commit("set_name", payload.name);
  // },
  // addMoney(context) {
  //   context.commit("add_money");
  // },
  setName({ commit, state }, payload) {
    commit("set_name", payload);
    console.log("他是", state.name);
  },
  addMoney({ commit }) {
    commit("add_money");
  },
  setLike({ commit }, payload) {
    commit("set_like", payload);
  },
  setSex({ commit }, payload) {
    commit("set_sex", payload);
  },
};

const getters = {
  say: state => {
    let hobit = state.like.join("、");
    return `我是${state.name}，我是${state.sex}的，我喜欢${hobit}，我有${state.money}块`;
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};
