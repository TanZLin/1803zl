$(function () {
    // 调用
    var isLogin = sessionStorage.getItem('isLogin');
    // console.log(sessionStorage.getItem('aaa'))
   
    if(isLogin){
        // console.log(isLogin)
        $('.login_top').html(JSON.parse(isLogin)[0].username)
        $('.zhuce_top').html("退出登陆")
    }
    // console.log(1234567)
    $('#banner1').myscroll({
        picEl: $('#move1'), //图片父级，不传默认为banner内第1个div
        ctrlEl: $('#ctrl'), //控制条父级，包括小圆点和左右箭头，不传默认为banner内第2个div
        libs: true, //是否创建底部小ctrl1圆点，true || false,不传默认true
        arrows: true, //是否创建左右箭头，true || false,不传默认true
        autoPlay: true, //是否自动播放，true || false,不传默认true
        time: 3000, //自动播放间隔时间，true || false,不传默认2000
        speed: 400, //图片切换速度，不传默认400
        effect: 'left' //轮播的改变方式 top||left||fade，不传默认left
    });


    //循环生成 <!--热门品牌 HOT BRAND-->
    let imglist = [
        {
            imgurl: './images/xiezi1.jpg'
        }, {
            imgurl: './images/xiezi2.jpg'
        }, {
            imgurl: './images/xiezi3.jpg'
        }, {
            imgurl: './images/xiezi4.jpg'
        },
    ]
    var html = '<ul class="cf">';
    imglist.forEach(function (item, idx) {
        html += `<li class="fl listLi">
            <img src=${item.imgurl} />
        </li>`
    })
    html += '</ul>';
    $('.hot_b').html(html);
    


    

    //循环生成 <!-- 品牌logo -->
    let imgpinpai = [
        {
            imgurl: "./images/logo1.jpg"
        }, {
            imgurl: "./images/logo2.jpg"
        }, {
            imgurl: "./images/logo3.jpg"
        }, {
            imgurl: "./images/logo4.jpg"
        }, {
            imgurl: "./images/logo5.jpg"
        }, {
            imgurl: "./images/logo1.jpg"
        }, {
            imgurl: "./images/logo2.jpg"
        }, {
            imgurl: "./images/logo3.jpg"
        }, {
            imgurl: "./images/logo4.jpg"
        }, {
            imgurl: "./images/logo5.jpg"
        }, {
            imgurl: "./images/logo1.jpg"
        }, {
            imgurl: "./images/logo2.jpg"
        }, {
            imgurl: "./images/logo3.jpg"
        }, {
            imgurl: "./images/logo4.jpg"
        }, {
            imgurl: "./images/logo5.jpg"
        }, {
            imgurl: "./images/logo1.jpg"
        }, {
            imgurl: "./images/logo2.jpg"
        }, {
            imgurl: "./images/logo3.jpg"
        }, {
            imgurl: "./images/logo4.jpg"
        }, {
            imgurl: "./images/logo5.jpg"
        }, {
            imgurl: "./images/logo1.jpg"
        }, {
            imgurl: "./images/logo2.jpg"
        }, {
            imgurl: "./images/logo3.jpg"
        }, {
            imgurl: "./images/logo4.jpg"
        }, {
            imgurl: "./images/logo5.jpg"
        }, {
            imgurl: "./images/logo1.jpg"
        },
    ]
    
    var logo_b = '<ul class="cf">';
    imgpinpai.forEach(function (item, idx) {
        logo_b += `<li class="fl">
            <img src=${item.imgurl} />
        </li>`
    })
    logo_b += '</ul>';
    console.log()
    $('.logo_pinpai').html(logo_b);



    // 特卖专区
    let sale = [
        {
            imgurl:'./images/temei2.jpg',
            name:'The north face乐斯菲斯2018春夏新品男短袖POLO衫 ',
            type:'NF0A3CJ6DYZ1',
            price:'398',
            prime:'500',
        },{
            imgurl:'./images/temei3.jpg',
            name:'The north face乐斯菲斯2018春夏新品男短袖POLO衫 ',
            type:'NF0A3CJ6DYZ1',
            price:'398',
            prime:'500',
        },{
            imgurl:'./images/temai4.jpg',
            name:'The north face乐斯菲斯2018春夏新品男短袖POLO衫 ',
            type:'NF0A3CJ6DYZ1',
            price:'398',
            prime:'500',

        },{
            imgurl:'./images/temei3.jpg',
            name:'The north face乐斯菲斯2018春夏新品男短袖POLO衫 ',
            type:'NF0A3CJ6DYZ1',
            price:'398',
            prime:'500',
        },
    ]

    var prefecture = '<ul class="cf">'
    sale.forEach((item,idx)=>{
        // console.log
        prefecture +=`<li class="fl">
            <img src=${item.imgurl}>
            <p>${item.name}</p>
            <p>${item.type}</p>
            <p><span>￥${item.price}</sppan><span>￥${item.prime}</span></p>
        </li>`
    })
    prefecture += '</ul>';
    $('.temai_lr').html(prefecture);

    $('img').click(function(){
        pagePush('list.html')
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



    let login_top = document.querySelector('.login_top')
    
    $('.login_top').on('click',function(){
        if(isLogin){
            // console.log(isLogin)
            return;
        }
        pagePush('login.html')
    })
    $('.zhuce_top').on('click',function(){
        if(isLogin){
            sessionStorage.removeItem('isLogin')
            pagePush('list.html')
        }else{
            pagePush('reg.html')
        }
     
 
    })


})

