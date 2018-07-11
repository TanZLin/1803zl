
$(function () {
    $('.btn').on('click',function(e) {
       // console.log(e)
        // var email = $('#email_').val();
        // var password = $('#password_').val();
        var obj = {
            username:$('#email_').val(),
            pwd:$('#password_').val(),
        }
        
        http.post('login.php',obj,function(res){
            
            var data = JSON.parse(res)
            // location.href='http://localhost:88/src/index.html'
            console.log(data)
            if(data.length>0){
                sessionStorage.setItem('isLogin',res)
                pagePush('index.html')
            }else{
                alert('登录失败')
            }
        })
    })
})