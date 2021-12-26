$(function () {
    load();
    // 回车事件绑定
    $('#title').on('keydown', function (e) {
        if (e.keyCode === 13) {
            var local = getData();
            // 把最新的数据追加进数组
            local.push({
                title: $(this).val(),
                done: false
            });
            // 保存到
            saveData(local);
            load();
            $(this).val('');
        }
    })

    // 读取本地存储数据
    function getData() {
        var data = localStorage.getItem("todoList");
        console.log(data);
        if (data !== null) {
            return JSON.parse(data);
        } else {

            return [];
        }
    }

    // 保存数据
    function saveData(obj) {
        localStorage.setItem("todoList", JSON.stringify(obj));
    }

    //渲染函数
    function load() {
        var data = getData();
        // 遍历前先清空一遍 防止多渲染
        $('ol').empty();
        // 遍历数据
        var todoCount = 0;
        var doneCount = 0;
        $.each(data, function (index, element) {
            if (!element.done) {
                todoCount++;
                $('#todo').prepend("<li><input type='checkbox'><p>" + element.title + "</p><a href='javascript:;' class='link' id=" + index + "></a></li>");
            } else {
                doneCount++;
                $('#done').prepend("<li><input type='checkbox' checked><p>" + element.title + "</p><a href='javascript:;' class='link' id=" + index + "></a></li>");
            }
        })
        $('#todoball').text(todoCount);
        $('#doneball').text(doneCount);
    }
    // 删除操作
    $('ol').on('click', 'a', function () {
        var data = getData();

        var index = $(this).attr("id");

        data.splice(index, 1);

        saveData(data);

        load();
    })
    // 点击复选框 触发事件
    $('ol').on('click', 'input', function () {
        var data = getData();
        // 获取兄弟a的id号
        var index = $(this).siblings('a').attr("id");
        data[index].done = $(this).prop("checked");
        // 修改完属性后 存回local
        saveData(data);
        // 重新渲染
        load();
    })

})