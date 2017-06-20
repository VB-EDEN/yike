# yike

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


#### QA
1. 设置公用的引入路径
```
// 文件位置
build/webpack.base.conf.js
// 代码位置
搜索 resolve 字段

alias -- 别名
example:  alias a as '你是傻逼'
每当说起 a 时, 就代表 '你是傻逼' 四个字
```

2. 页面公共入口为 App.vue
   所以公用的 css 代码需要在 App.vue 中引入
   此外 main.js 的作用域为全局
   所以也可以在 mian.js 中引入 css 模块(如果此css 代码支持 vue 引入的话)
   无法判断是否能引入时  直接引入
   然后 import xxx; vue.use(xxx.css) 如果没报错  就是能引入
   参照 normalize.css

3. 如果想需要一个依赖的库
   查找是否有该库
```
    // @后面接的是 xxx 插件的版本号, 版本号写错的话, 就会提示你目前有哪些版本
    npm install xxx@sb   

    // 到 npm 官网查询是否有该库
    https://www.npmjs.com/
```

   安装该库
```
    npm install xxx@[version] --save
```

   在代码中引入该库
```
    // main.js 中
    import xxx from 'xxx'
```

4. import 后面的路径有几种形式
```
代码寻找的优先级顺序, 从高到低
1. 如果路径是以 ./ 或 ../ 开头的, 那么一定是相对路径. 从当前文件开始找。
2. 直接以 xxx 字符串开头, 首先会去找路径别名, 有则使用别名所代表的路径
3. 如果没有该别名, 会去项目根目录下的 node_modules 下去找该模块 
```

5. 升级依赖库的版本
```
npm install xxx@version
// 就可以安装2.1.1 版本的jquery, node_modules 下只会有一个 jquery。新的会覆盖旧的
example: npm install jquery@2.1.1 

```

6. 配置路径步骤
```
// 1. 在 views 下新建 xxx.vue
// 2. 在 router/index.js 下新建路径
//    使路径映射到 xxx.vue
```











