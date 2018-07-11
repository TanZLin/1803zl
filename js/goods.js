$(function () {

	// // 登陆注册
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
			pagePush('goods.html')
		} else {
			pagePush('reg.html')
		}


	})


	console.log($('.zhuce_top'))
	$('.zhuce_top').on('click', function () {
		pagePush('list.html')
	})


	let id = location.href.split('=')[1];
	http.post('goods.php', { idx: id }, function (res) {
		// console.log(res)
		if (res.length > 0) {
			let obj = JSON.parse(res)[0];
			$('.shangpnane').html(obj.name + obj.type);
			$('.price').html('￥' + obj.price);
			$('.prime').html('￥' + obj.prime);

			$(".con-FangDa-ImgList").html(`<li class="active">
			<img src=${obj.imgUrl} data-bigimg=${obj.imgUrl}>
			</li>`)


			//循环生成浏览过的图片
			var arr = ""
			var proListul = document.querySelector('.proListul')
			for (var i = 0; i < 6; i++) {
				arr += `<li class="proListli fl">
				<img src=${obj.imgUrl}>
				<p class="proListp">${obj.name}</p>
				<p>${obj.type}</p>
				<p class="proListp3"><span>￥${obj.price}</span><span>￥${obj.prime}<span></p>
				</li>`
			}
			proListul.innerHTML = arr;


			//看了又看
			var miaoshaul = document.querySelector('.miaoshaul')
			var arr1 = ""
			for (var i = 0; i < 3; i++) {
				arr1 += `<li class="miaoshali">
				<img src=${obj.imgUrl}>
				<div class="miaoshadiv">
				<span>百丽</span>
				<span>￥${obj.price}</span>
				</div>
				
				</li>`
			}
			miaoshaul.innerHTML = arr1;


			$('.con-fangDaIMg').html(`
				<img src=${obj.imgUrl}>
				<div class="magnifyingBegin"></div>
				<div class="magnifyingShow">
					<img src=${obj.imgUrl}>
				</div>
			`)
			$("#fangdajing").magnifying();

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
				$(".logo_rlspan").html(total)
				
			}


			qty()
			

			$('.car').click(function () {

				// $(".logo_rlspan").html(goodlist.length)
				var inputvalue = $('.xiangqing_input').val()
				$('.xiangqing_input').val('0')
				var has = goodlist.some(function (goods) {
					// console.log(goods)
					var res = goods.indexid === obj.indexid;
					if (res) {

						goods.qty += Number(inputvalue)
					}
					return res;
				});


				if (!has) {

					obj.qty = Number(inputvalue);
					goodlist.push(obj)

				}

				Cookie.set('list', JSON.stringify(goodlist));
				// console.log(goodlist)
				qty()
			})
			$('.goumai').click(function () {
				pagePush('car.html')
			})
			
		}
	})


	//尺码选择
	var box = document.querySelector('.xiangqing_p2span');
	// console.log(box)
	var tabe = document.getElementsByClassName('tabe');
	// console.log(tabe)

	var res
	box.onclick = function (e) {
		console.log(e.target)
		for (var i = 0; i < tabe.length; i++) {
			//console.log(son[i])
			//清空span的background的所有样式
			tabe[i].style.background = ''
			//清空所有span的border的样式
			tabe[i].style.border = ''
		}
		//判断
		if (res == e.target) {
			e.target.style.background = '';
			e.target.style.border = '';
			res = ''
		} else {

			e.target.style.background = 'url(./images/c2.png) right bottom no-repeat';
			e.target.style.border = '1px solid #FF4500';
			res = e.target;
		}

	}



	//放大镜
	$.fn.magnifying = function () {

		var that = $(this),
			$imgCon = that.find('.con-fangDaIMg'),//正常图片容器
			$Img = $imgCon.find('img'),//正常图片，还有放大图片集合
			$Drag = that.find('.magnifyingBegin'),//拖动滑动容器
			$show = that.find('.magnifyingShow'),//放大镜显示区域
			$showIMg = $show.find('img'),//放大镜图片
			$ImgList = that.find('.con-FangDa-ImgList > li >img'),
			multiple = $show.width() / $Drag.width();

		$imgCon.mousemove(function (e) {
			$Drag.css('display', 'block');
			$show.css('display', 'block');
			//获取坐标的两种方法
			// var iX = e.clientX - this.offsetLeft - $Drag.width()/2,
			// 	iY = e.clientY - this.offsetTop - $Drag.height()/2,	
			var iX = e.pageX - $(this).offset().left - $Drag.width() / 2,
				iY = e.pageY - $(this).offset().top - $Drag.height() / 2,
				MaxX = $imgCon.width() - $Drag.width(),
				MaxY = $imgCon.height() - $Drag.height();

			/*这一部分可代替下面部分，判断最大最小值
		var DX = iX < MaxX ? iX > 0 ? iX : 0 : MaxX,
			  DY = iY < MaxY ? iY > 0 ? iY : 0 : MaxY;
		$Drag.css({left:DX+'px',top:DY+'px'});	   		
		$showIMg.css({marginLeft:-3*DX+'px',marginTop:-3*DY+'px'});*/

			iX = iX > 0 ? iX : 0;
			iX = iX < MaxX ? iX : MaxX;
			iY = iY > 0 ? iY : 0;
			iY = iY < MaxY ? iY : MaxY;
			$Drag.css({ left: iX + 'px', top: iY + 'px' });
			$showIMg.css({ marginLeft: -multiple * iX + 'px', marginTop: -multiple * iY + 'px' });
			//return false;
		});
		$imgCon.mouseout(function () {
			$Drag.css('display', 'none');
			$show.css('display', 'none');
		});

		$ImgList.click(function () {
			var NowSrc = $(this).data('bigimg');
			$Img.attr('src', NowSrc);
			$(this).parent().addClass('active').siblings().removeClass('active');
		});
	}


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

	var xiangqing_a2 = $('.xiangqing_a2')
	xiangqing_a2.click(function () {

		var inputvalue = $('.xiangqing_input')
		var xiangqing_input = Number(inputvalue.val()) + 1
		// console.log(xiangqing_input)
		inputvalue.val(xiangqing_input)



	})
	var xiangqing_a1 = $('.xiangqing_a1')
	xiangqing_a1.click(function () {

		var inputvalue = $('.xiangqing_input')
		var xiangqing_input = Number(inputvalue.val()) - 1
		if (xiangqing_input < 0) {
			xiangqing_input = 0;
		}
		// console.log(xiangqing_input)
		inputvalue.val(xiangqing_input)



	})

})