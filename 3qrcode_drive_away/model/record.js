 //验证是否为合法电话号
 var confirmInputTel = (tel) => {
    var val = String(tel.value)
    var bool = (val.length === 11)
    return bool

}
//手机号错误执行函数
var telError = (element) => {
    element.value = ""
    element.placeholder = "请输入正确手机号"
    element.focus()
}
//基本模板
var template = (html_element_name, value = "") => {
    // value = value || ""
    return `<${html_element_name}>${value}</${html_element_name}>`
}
//动态生成一行
var add = (element, arr, html_element_name) => {
    var str = ""
    arr.map((x) => {
        str += template(html_element_name, x)
    })
    addHTML(element, template("tr", str))
}
//动态生成表格(给定格式为对象数组类型的data)
var addTable = (data) => {
    var container = e('.gridtable')
    add(container, Object.keys(data[0]), "Th")
    data.map((x) => {
        add(container, Object.values(x), "Td")
    })
}
//查询记录(向后端请求还不会，这里用的模拟数据)
var queryRecord = () => {
    var button = e('#id-button-query')
    var tel = e('#telephone')
    bindEvent(button, 'click', (event) => {
        var bool = confirmInputTel(tel)
        if (bool) {
            axios.get("/search_data", {
                    params: {
                        tel: telephone,
                        Invitation_code: Invitation_code.value
                    }
                }).then((response) => {
                    status = response.data.status
                    log(status)
                    switch (status) {
                        case "success":
                            log(response.data)
                            if (response.data.results != null) {
                                addTable(response.data)
                                e(".table_show").style.display = "block"
                            } else {
                                show_info(tel, "该手机号查无结果")
                            }
                            break
                        case "fatal":
                            show_info(Invitation_code, "邀请码错误,请重新输入")
                            break
                        case "error":
                            alert("请求错误,请刷新后重试")
                            break
                        default:
                            alert("服务器异常,请点击右上角联系我们")
                            break
                    }
                })
                .catch((error) => {
                    log(error);
                    alert("服务器异常，请点击右上角，反馈给我们")
                });
            return false
        } else {
            telError(tel)
            return false
        }
    })

}
var __main = () => {
    queryRecord()

}
__main()