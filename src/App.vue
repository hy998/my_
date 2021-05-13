<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.commit("setUserInfo", {
      name: "heyu",
      age: "29",
      phone: "15823139340",
      id: 1,
    });
    // this.$http
    //   .post("user/GetUserInfo.json", {
    //     token: "969d0fb4e5c7817c8de5a9e58970446bf988a19a7b676357",
    //     t: new Date().getTime(),
    //     mac: "",
    //   })
    //   .then((response) => {
    //     if (response.status === 200 && response.data.status === 1) {
    //       this.$store.commit("setUserInfo", {
    //         userInfo: response.data.result.loginInfo,
    //       });
    //     }
    //   });
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
