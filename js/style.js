// tab转换
// var lis = document.querySelector('.tab1').querySelectorAll('li');
// var items = document.querySelector('.tab_con').querySelectorAll('.item');
// for (var i = 0; i <= lis.length - 1; i++) {
//     lis[i].setAttribute('index', i);
//     lis[i].onclick = function () {
//         var index = this.getAttribute('index');
//         // console.log(index);
//         for (var i = 0; i <= lis.length - 1; i++) {
//             items[i].style.display = 'none';
//         } // 设置索引号
//         items[index].style.display = 'block';
//     }
// }

// 主页打字效果 待写
// 底部样式和顶部样式
var footers = document.querySelector('footer');
footers.innerHTML = foots;
// var headers = document.querySelector('.dengl')
// headers.innerHTML = heads;
// 第一屏
var itemBtn = document.querySelector('.item_btn');
var itspan = document.querySelector('.item').querySelector('span');
var itemImg = document.querySelector('.itemImg')
var ibtn = itemBtn.children[1];
ibtn.onclick = function () {
    var spanC = document.createElement('i');
    if (itemBtn.children[0].value !== 'Harry') {
        itspan.children[0].innerHTML = '输入的指令有误请重新输入！！!</br>提示：Harry，不加引号注意大小写';
        itemBtn.children[0].value = '';
    } else {
        itspan.appendChild(spanC);
        spanC.innerHTML = firstCnt;
        itemBtn.style.display = 'none';
        itemImg.src = item1author;
        itemImg.className = 'itemImg img1';
        if (itspan.children.length != 1) {
            itspan.removeChild(itspan.children[0]);
        }
    }
}
// 底部右侧留言板样式
var container = document.querySelector('.container');
var box2 = document.querySelector('.box2');
var box = document.querySelector('.box');
// console.log(box2.offsetWidth);  //获取盒子的宽度
var box2w = box2.offsetWidth;
container.addEventListener('mouseover', function () {
    box2.style.transition = 'all .4s';
    box2.style.transform = 'translateX(' + -box2w + 'px)';
    // animate(box2, -130, 15);

    box.innerHTML = '&gt;';
})
container.addEventListener('mouseout', function () {
    box2.style.transition = 'all .4s';
    box2.style.transform = 'translateX(' + box2w + 'px)';
    // animate(box2, 130, 15);
    box.innerHTML = '&lt;'
})
// 页面滑动效果
var mo = function (e) { e.preventDefault(); };
function stop() {
    document.body.style.overflow = 'hidden';
    document.addEventListener("touchmove", mo, { passive: false });//禁止页面滑动
}
//直接默认不让滑动
// stop();  停止调用
/***取消滑动限制***/
function move() {
    document.body.style.overflow = '';//出现滚动条
    document.removeEventListener("touchmove", mo, { passive: false });
}

// 黑白主题，根据时间变化或者点击实现
var themeChage = document.querySelector('.tab_con').querySelector('.theme');
var date = new Date();
var dateH = date.getHours()
var flag = 0;
//昼夜模式切换后弹出提示框
var dlswitch = document.querySelector('.dlswitch');
function eblockLight() {
    dlswitch.style.display = 'block';
    dlswitch.innerHTML = '您已切换为浅色模式';
    dlswitch.style.backgroundColor = 'rgb(155,138,200)';
    dlswitch.className = 'dlswitch dswitch';
}
function eblockdark() {
    dlswitch.style.display = 'block';
    dlswitch.innerHTML = '您已切换为深色模式'
    dlswitch.style.backgroundColor = '#0d3a75';
    dlswitch.className = 'dlswitch dswitch';
}
function darkswitch() {
    dlswitch.style.display = 'none';
}
if (dateH >= 22 || dateH <= 7) {
    document.documentElement.className = 'theme-dark';
    themeChage.onclick = function () {
        if (flag == 0) {
            document.documentElement.className = 'theme-light';
            flag = 1;
            eblockLight();
        } else {
            document.documentElement.className = 'theme-dark';
            flag = 0;
            eblockdark();
        }
        setTimeout(function () {
            darkswitch();
        }, 2490)
    }
}
else {
    document.documentElement.className = 'theme-light';
    themeChage.onclick = function () {
        if (flag == 0) {
            document.documentElement.className = 'theme-dark';
            flag = 1;
            eblockdark();
        } else {
            document.documentElement.className = 'theme-light';
            flag = 0;
            eblockLight();
        }
        setTimeout(function () {
            darkswitch();
        }, 2490)
    }
}

// 第二屏
var tab2e = document.querySelector('.btn-2');
var conC = document.querySelector('.conC');
var tab2C = document.createElement('li');
var waits = 3;
tab2e.addEventListener('click', function () {
    conC.appendChild(tab2C);
    tab2C.innerHTML = '请耐心等待' + waits + '秒';
    var times = setInterval(tab2s, 1000);
    function tab2s() {
        if (waits !== 0) {
            tab2C.innerHTML = '请耐心等待' + waits + '秒';
            waits--;
        } else {
            tab2e.style.display = 'none'
            conC.removeChild[0];
            conC.appendChild(tab2C);
            tab2C.innerHTML = tab2Cc;
            tab2C.children[0].className = 'dataIndex'
            clearInterval(times);
        }
    }// 第二屏图片样式
    var time2 = setInterval(fn22, 2000);
    function fn22() {
        if (tab2C.children[0] !== undefined) {
            var dataIndex = document.querySelector('.dataIndex')
            // 使用addEventListener会出现事件冒泡
            dataIndex.onclick = function () {
                var imggif = document.createElement('img');
                conC.children[0].style.display = 'none'
                conC.appendChild(imggif);
                imggif.src = imgsrc;
                clearInterval(time2);
            }
        }
        else {
            console.log('Tab2函数不会执行');
        }
    }
});

// <!--  以上为原生js -->

// 从这里开始使用jQuery

$(function () {
    // (1)动态创建多个相同元素，使用for循环，每循环一次执行一次
    for (var i = 0; i < $('.item').length; i++) {
        var li = $('<li></li>')
        $('.shuff').append(li);
    }
    // .addClass('data-lunbo')
    // 使用while循环
    // var i = 0;
    // while(i != $('.item').length){
    //     var li = $('<li></li>')
    //     $('.shuff').append(li);
    //     i++;
    // }
    // if判断+定时器
    // var timer = setInterval(function () {
    //     if ($('.shuff').children().length !== $('.item').length) {
    //         var li = $('<li></li>')
    //         $('.shuff').append(li);
    //         console.log($('.shuff').children().length);
    //     } else {
    //         clearInterval(timer);
    //     }
    // }, 1000);
    // (2)使用jQuery实现tab栏的切换
    $('.tab1 li,.shuff li').on({
        click: (function () {
            var index = $(this).index();
            $('.item').eq(index).stop().slideDown().show();
            $('.item').eq(index).siblings().stop().fadeOut().hide();
            // console.log($('.shuff li').eq(index).siblings());
            $('.shuff li').eq(index).addClass('data-lunbo').stop().fadeIn(1200);
            $('.shuff li').eq(index).siblings().removeClass('data-lunbo')
        })
    })
})


