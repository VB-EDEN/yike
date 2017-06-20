// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import jquery from 'jquery'
import router from './router'




// css
import normalize from 'normalize.css'
import fontAwesome from 'font-awesome-webpack!./libs/font_awesome/font-awesome.config.js'
Vue.use(normalize)
Vue.use(fontAwesome)






// 设置全局的变量 如果不赋值给 window 对象 $ 就只能在当前文件中使用
window.$ = jquery
import unslider from 'unslider' // 应该没问题了 , 
console.debug($("div").unslider)


// vue setting
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
