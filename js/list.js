$(function () {

    http.post('list.php', {}, function (res) {
        // console.log(res)
        var data = JSON.parse(res)
        //    console.log(data)
        var html = "<ul class='cf listul'>"
        data.forEach(function (item, idx) {
            // console.log(item)
            html += `<li class="fl listli data-id" data-id =${item.indexid
                }>
            <img src=${item.imgUrl}>
            <p class="discou">${item.discou}</p>
            <div>
                <p>${item.name}</p>
                <p>${item.type}</p>
            </div>
          
            <p class="price"><span>￥${item.price}</span><span>￥${item.prime}</span></p>
           </li> `
        })
        html += '</ul>';
        // var list = document.querySelector('.list');
        // list.innerHTML = html;
        $('.list').html(html);

        $('.listli').on('click', function (e) {
            // console.log(this.getAttribute("data-id"))
            let id = this.getAttribute("data-id")
            pagePush('goods.html' + `?id=${id}`) 
        })


        var goodlist = Cookie.get('list');
        // console.log(list)

        if (goodlist) {
            goodlist = JSON.parse(goodlist)
        } else {
            goodlist = [];
        }


        //购物车qty
        function qty() {

            var total = 0;
            goodlist.map(function (item, index) {
                // console.log(index)
                total += item.qty * 1
            })
            $(".logo_rl_s").html(total)
            
        }
        qty()



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
                pagePush('list.html')
            } else {
                pagePush('reg.html')
            }


        })
    })




})