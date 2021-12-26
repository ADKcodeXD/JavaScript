$(function () {
    (function () {
        $('.monitor .tabs').on('click', 'a', function () {
            $(this).addClass('active').siblings('a').removeClass();
            $('.monitor .content').eq($(this).index()).show().siblings('.content').hide();

        })

        $('.marquee-view .marquee').each(function () {
            var rows = $(this).children().clone();
            $(this).append(rows);
        })
    })();

    (function () {
        var myChart = echarts.init(document.querySelector('.map'));
        var color = ['#ff7972', '#579eff', '#57ff6b', '#fff71e', '#ff1ee2'];
        var option = {
            series: [{
                name: 'Nightingale Chart',
                type: 'pie',
                radius: ['0%', '60%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                color: color,
                label: {
                    fontSize: 14,
                    color: '#fff',

                },
                labelLine: {
                    length: .2,
                    length2: 4,
                },
                itemStyle: {
                    borderRadius: 3
                },
                data: [{
                        value: 50,
                        name: '华南'
                    },
                    {
                        value: 38,
                        name: '华东'
                    },
                    {
                        value: 32,
                        name: '华北'
                    },
                    {
                        value: 30,
                        name: '西部'
                    },
                    {
                        value: 28,
                        name: '南部'
                    }

                ]
            }]
        };
        myChart.setOption(option);
    })();
})