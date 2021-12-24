function animate(obj, target, callback) {
    // 进入的时候清除一下obj的定时器，避免多个动画同时运行
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        if (obj.offsetLeft >= target) {
            clearInterval(timer);
            // 回调函数 可以写在定时器结束的时候进行调用
            // 如果有传入函数参数，就会调用这个函数
            if (callback) {
                callback();
            }
        }
        // 缓动步长公式
        var step = (target - obj.offsetLeft) / 10;

        // 如果是正值则向上取整 如果是负值则向下取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        // 修改obj的位置
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}