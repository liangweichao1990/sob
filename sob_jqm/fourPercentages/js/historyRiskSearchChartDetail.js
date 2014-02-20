/*******************
    页面：历史隐患查询图表详情JS
    作者：梁伟超
    日期：2014-02-20
    版本：1.0
*******************/

$(document).delegate("#historyRiskSearchChartDetailView", "pageinit", function() {
    $(document).bind("pagechange", function(e, data){
        if(typeof data.toPage != "string")
        {
            //var d = data.options.data;
            
            var s1 = [9726, 2588, 2725, 4184];
            var s2 = [5933, 49, 221, 915];
            var ticks = ['上报率', '黑名单查处', '零隐患检查', '其他抽查'];
            
            $.jqplot('historyRiskSearchDetailBarChart2', [s1, s2],
                {title:'四个百分率统计图表',
                   seriesDefaults: {renderer:$.jqplot.BarRenderer,pointLabels: {show:true}},
                   series:[{label:'企业总数'},{label:'上报查处数'}],
                   legend: {show:true, location:'n', placement:'inside'},
                   axes: {xaxis: {renderer: $.jqplot.CategoryAxisRenderer,ticks: ticks}
                }
            });
        }
    });
});