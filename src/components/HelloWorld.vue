<template>
  <div id="home">
    <Button type="primary" shape="circle" icon="ios-search"></Button>
    <Button type="primary" loading>Loading...</Button>
    <div class="tables">
      <Table
        row-key="ids"
        :columns="columns1"
        :data="data1"
        border
        :height="280"
      ></Table>
    </div>
    <Button type="primary" @click="open">全局确认弹窗</Button>
    <p>我是全局变量：{{`${$store.state.userInfo.name}--${$store.state.userInfo.phone}`}}</p>
    <div id="qrcode">
      <vue-qr :logoSrc="imageUrl" text="你好，我是二维码" :size="200"></vue-qr>
    </div>
      <p>我是多语言的变量: {{$t('m.music')}}</p>
      <p>我是多语言的变量: {{$t('m2.music')}}</p>
      <p>当前的语言是：{{this.$i18n.locale }}</p>
      <Button type="primary" @click="change">切换语言</Button>
  </div>
</template>

<script>
// import QRCode from "qrcodejs2";
import vueQr from 'vue-qr'
export default {
  name: "HelloWorld",
  components: {
      vueQr
    },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      columns1: [
        {
          title: "姓名",
          key: "name",
          tree: true,
        },
        {
          title: "年纪",
          key: "age",
          sortable: true,
        },
        {
          title: "地址",
          key: "address",
          render: (h, params) => {
            return h(
              "Tooltip",
              {
                props: {
                  placement: "top",
                  content: params.row.address,
                },
              },
              params.row.address
            );
          },
        },
        {
          title: "操作",
          render: (h, params) => {
            return h("div", [
              h("Icon", {
                props: {
                  type: "md-add",
                },
                style: {
                  cursor: "pointer",
                  margin: "0 10px",
                },
                attrs: {
                  title: "添加",
                },
              }),
              h("Icon", {
                props: {
                  type: "md-trash",
                },
                style: {
                  cursor: "pointer",
                },
                attrs: {
                  title: "删除",
                },
              }),
            ]);
          },
        },
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03",
          children: [
            {
              name: "John Brown",
              age: 18,
              address: "New York No. 1 Lake Park",
              date: "2016-10-03",
            },
            {
              name: "Jim Green",
              age: 24,
              address: "London No. 1 Lake Park",
              date: "2016-10-01",
            },
            {
              name: "Joe Black",
              age: 30,
              address: "Sydney No. 1 Lake Park",
              date: "2016-10-02",
            },
          ],
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01",
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02",
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04",
        },
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03",
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01",
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02",
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04",
        },
      ],
      imageUrl: require('../assets/logo.png')
    };
  },
  methods: {
    open() {
      this.$popup({
        com_ok_msg: "我是一个全局组件",
      });
    },
    change() {
      this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh'
    }
  },
  created() {
    console.log(this.$store.state.userInfo)
    // this.$http.get("/user/userinfo.json", {
    //   params: {},
    // });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#home {
  .tables {
    width: 800px;
    margin: 10px;
  }
}
</style>
