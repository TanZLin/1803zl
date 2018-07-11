$(function () {
  
    $('#reg_buton').on('click',function(e) {
        console.log(e)
        // var email = $('#email_').val();
        // var password = $('#password_').val();
        var obj = {
            username:$('#reg_mobile_code_').val(),
            pwd:$('#reg_password_').val(),
        }
        http.post('register.php',obj,function(res){
            var data = res
            // location.href='http://localhost:88/src/index.html'
            console.log(data)
            if(data == 1){
                sessionStorage.setItem('aaa','asdfrtgyujxcfgh')

               pagePush('login.html')
            }else if(data == 2){
                alert('注册失败')
            }else{
                alert('已注册')
            }
        })
    })
})