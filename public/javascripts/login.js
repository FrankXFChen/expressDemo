$(function(){
    init();

    function init(){
        bindEvent();
    }

    function bindEvent(){
        $('#loginBtn').on('click', ()=>{
            var userName = $('#email-input').val();
            var passWord = $('#pwd-input').val();
            var data = {
                userName: userName,
                passWord: passWord
            }
            $.ajax({
                url: 'login',
                type: 'POST',
                data: data,
                success: function (res) {
                    if (res.data.flag) {
                        location.href = 'home';
                    }
                },
                error: function (err) {
                   console.log(err);
                }
                // success: function (data, status) {
                //     if (status == 'success') {
                //         location.href = 'home';
                //     }
                // },
                // error: function (data, status, e) {
                //     if (status == "error") {
                //         location.href = 'login';
                //     }
                // }
            });
        });
    }
})