// 以 baseWidth 宽度设计和制作页面 其他宽度等比放大缩小
var adaptive = function (baseWidth) {
    var rate = window.innerWidth/baseWidth
    document.getElementsByTagName('html')[0].style.fontSize = 100 * rate + 'px'
}
document.body.onload = window.onresize = function () {
    adaptive(320)
}