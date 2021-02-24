// 封装一个匀速或者变速的缓动文件
// 第一是减速的
function animate(obj, target,speed,callback,) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, speed)
}
// 第二个封装匀速
// 对象，目标位置，每次移动的距离，移动速度，回调函数
// var demo = animateun(obj, target, csteps, callback)
function animateun(obj, target,csteps,speed,callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // var step = (target - obj.offsetLeft) / 10;
        // step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft >= target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + csteps + 'px';
    }, speed)
}
