// tab转换
var lis = document.querySelector('.tab1').querySelectorAll('li');
var items = document.querySelector('.tab_con').querySelectorAll('.item');
for (var i = 0; i <= lis.length - 1; i++) {
    lis[i].setAttribute('index', i);
    lis[i].onclick = function () {
        var index = this.getAttribute('index');
        console.log(index);
        for (var i = 0; i <= lis.length - 1; i++) {
            items[i].style.display = 'none';
        } // 设置索引号
        items[index].style.display = 'block';
    }
}
// 主页打字效果 待写
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
// 页面滑动效果
var mo = function (e) { e.preventDefault(); };
function stop() {
    document.body.style.overflow = 'hidden';
    document.addEventListener("touchmove", mo, { passive: false });//禁止页面滑动
}
//直接默认不让滑动
stop();
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
themeChage.onclick = function () {
    if (flag == 0) {
        document.documentElement.className = 'theme-dark';
        flag = 1;
    } else {
        document.documentElement.className = 'theme-light';
        flag = 0;
    }
}
if (dateH >= 22 || dateH <= 7) {
    document.documentElement.className = 'theme-dark';
}
else {
    document.documentElement.className = 'theme-light';
}