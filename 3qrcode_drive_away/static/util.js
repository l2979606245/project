
var log = console.log.bind(console)
//简化查找元素的方式
var e = (selector) => {
    var element = document.querySelector(selector)
    return element
}
var addHTML = (element, html) => {
    element.insertAdjacentHTML('beforeend', html)
}
//绑定事件的函数
var bindEvent = (element, eventName, callback) => {
    element.addEventListener(eventName, callback)
}
        //验证是否为合法电话号
        var confirmInputTel = function(tel) {
            var val = String(tel.value)
            var bool = (val.length === 11)
            return bool

        }   
        //手机号错误执行函数
        var telError = function (element) {
            element.value = ""
            element.placeholder = "请输入正确手机号"
            log('focus start')
            element.focus()
            log('focus end')
        }
var show_info = (c, text) => {
    e(".js_tooltips").innerText = text
    e(".js_tooltips").style.display = 'block';
    c.value = ""
    c.focus()
    setTimeout(() => {
        e(".js_tooltips").style.display = 'none';

    }, 2000);
    try {
        e(".table_show").style.display = "none"
    } catch (error) {
    }
}