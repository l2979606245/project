var submitTel = () => {
    var tel = e('#id-input-tel')
    var sub = e('#id-button-sub')
    bindEvent(sub, 'click', (event) => {
        var bool = confirmInputTel(tel)
        if(bool) {
            axios.get('/address_img', {
                params: {
                    tel: telephone
                }
            })
            .then((response) => {
                img.src = "static/img/" + response.data.img_name + ".jpg"

            })
            .catch((error) => {
                log(error);
                alert("服务器异常，请点击右上角，反馈给我们")
            });
        } else {
            log('telError start')
            telError(tel)
        }
    })
}
var _main = () => {
    submitTel()
}
_main()