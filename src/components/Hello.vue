<template>
    <div class="hello">
        <header class="clearfix">
            
            <img class="header_logo" src="../assets/logo.png" alt="">
            
            <div class="header_menu">
                <ul class="clearfix">
                    <li><a href="" class="header_blue">首页</a></li>
                    <li><a href="">产品</a></li>
                    <li><a href="">客户</a></li>
                    <li><a href="">购买</a></li>
                    <li><a href="">加盟</a></li>
                    <li><a href="">帮助</a></li>
                </ul>
            </div>    
        </header>
    </div>
</template>

<script>
// 设置全局的变量 如果不赋值给 window 对象 $ 就只能在当前文件中使用
// 假如你没有赋值给 window 那么你就需要在此引入jquery  才能使用

export default {
    name: 'hello',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    mounted () {
        // ok 现在你就可以使用 jquery 了
        // 至于你的 jquery 插件  
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@media screen and(min-width:1921px) {
    header {
        max-width: 1920px
    }
    
}
header{
    padding: 17px 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    margin:auto;
    min-width:1170px;
    
    .header_logo {
        width: 70px;
        height: 25px;
        float: left;       
    }
    .header_menu {
        float: right;
        margin-right: 400px;
        .header_blue {
             color:#03b8cc;
             transition:all 0.3s;
            -webkit-transiton:all 3s;
        }

        ul li {
            list-style: none;
            float: left;
          
            a {
                display: block;
                height: 25px;
                line-height: 25px;
                color: #fff;
                text-decoration: none;
                font-weight: 400;
                font-size: 16px;
                margin-right: 30px;
            }
            a:hover {
                color:#03b8cc;
                transition:all 0.3s;
                -webkit-transiton:all 3s;
            }
        }
    }

}
</style>
