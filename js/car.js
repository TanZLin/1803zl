$(function () {
    
    var goodlist = Cookie.get('list');
    // console.log( goodlist)
        let arr =JSON.parse(goodlist);

        aa()
        function aa(){
            var html = ''
            arr.forEach(function(item,idx){
                console.log(item)
                html += `<ul class="order_lists">
                <li class="list_chk">
                    <input type="checkbox" id="checkbox_2" class="son_check">
                    <label for="checkbox_2"></label>
                </li>
                <li class="list_con">
                    <div class="list_img">
                        <a href="javascript:;">
                            <img src=${item.imgUrl} alt="">
                        </a>
                    </div>
                    <div class="list_text">
                        <a href="javascript:;">${item.name+item.type}</a>
                    </div>
                </li>
                <li class="list_price">
                    <p class="price">￥${item.price}</p>
                </li>
                <li class="list_amount">
                    <div class="amount_box">
                        <a href="javascript:;" class="reduce reSty">-</a>
                        <input type="text" value="${item.qty}" class="sum">
                        <a href="javascript:;" class="plus">+</a>
                    </div>
                </li>
                <li class="list_sum">
                    <p class="sum_price">￥${item.price}</p>
                </li>
                <li class="list_op">
                    <p class="del">
                        <a href="javascript:;" class="delBtn" data-idx = ${idx}>移除商品</a>
                    </p>
                </li>
            </ul>`
            })
            $('.order_content').html(html)
    
    
            // let del = $('.delBtn')
            // console.log(del)
            var a=[1,2,3]
    
            $('.delBtn').on('click',function(){
                let idx = this.getAttribute("data-idx");
                arr.splice(idx,1)
                Cookie.set('list',JSON.stringify(arr))
                aa()
            })
        }

        // 登陆注册
        var isLogin = sessionStorage.getItem('isLogin');
        // console.log(sessionStorage.getItem('aaa'))
        if (isLogin) {
            // console.log(isLogin)
            $('.login_top').html(JSON.parse(isLogin)[0].username)
            $('.zhuce_top').html("退出登陆")
        }
        $('.login_top').on('click', function () {
            if (isLogin) {
                // console.log(isLogin)
                return;
            }

            pagePush('login.html')
            
        })
        $('.zhuce_top').on('click', function () {
            if (isLogin) {
                sessionStorage.removeItem('isLogin')
                pagePush('car.html')
            } else {
                pagePush('reg.html')
            }


        })
        
    })