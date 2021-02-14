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

// 第一屏
var firstCnt = '<a href="https://u.mr90.top/" target="_blank">输入正确!!<br>欢迎你来到我的博客</a><br><p>关于：此屏采用了js中的node的增加与删除,灵活使用孩子节点</p>';
var itemBtn = document.querySelector('.item_btn');
var itspan = document.querySelector('.item').querySelector('span');
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
        if (itspan.children.length != 1) {
            itspan.removeChild(itspan.children[0]);            
        }
    }
}