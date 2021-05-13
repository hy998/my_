<template>
  <div id="com_ok">
    <Modal title="提示" v-model="show" :mask-closable="false" width="500">
     <div>
         {{com_ok_msg}}
         <p>我是全局变量：{{userAge}}</p>
     </div>
    </Modal>
  </div>
</template>

<script>
import $store from '../../vuex/index'
export default {
  data() {
    return {
      show: false,
      com_ok_msg: '',
      userAge: $store.state.userInfo.age
    };
  },
  created() {
    console.log($store.state.userInfo)
  }
};
</script>

<style lang="less" scoped>
#com_ok {
}
</style>