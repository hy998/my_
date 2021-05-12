<template>
  <div id="home">
    <Button type="primary" shape="circle" icon="ios-search"></Button>
    <Button type="primary" loading>Loading...</Button>
    <div class="tables">
      <Table row-key="ids" :columns="columns1" :data="data1" border :height="280"></Table>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      columns1: [
        {
          title: "Name",
          key: "name",
          tree: true,
        },
        {
          title: "Age",
          key: "age",
          sortable: true
        },
        {
          title: "Address",
          key: "address",
          render: (h, params) => {
            return h('Tooltip', {
              props: {
                placement: 'top',
                content: params.row.address
              }
            }, params.row.address)
          }
        },
        {
          title: '操作',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
              props: {
                type: 'md-add'
              },
              style: {
                cursor: 'pointer',
                margin: '0 10px'
              },
              attrs: {
                title: '添加'
              }
            }),
            h('Icon', {
              props: {
                type: 'md-trash'
              },
              style: {
                cursor: 'pointer'
              },
              attrs: {
                title: '删除'
              }
            })
            ])
          }
        }
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
    };
  },
  created() {
    this.$http.get("/user/userinfo.json", {
      params: {},
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#home {
  .tables {
    width: 800px;
    margin: 20px auto;
  }
}
</style>
