import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

const messages = {
  zh: require("./zh"), // 简体中文语言包
  en: require("./en"), // 英文语言包
};

export default new VueI18n({
  locale: 'zh', // 默认显示简体中文
  // this.$i18n.locale 来获取当前语言
  messages: messages 
});