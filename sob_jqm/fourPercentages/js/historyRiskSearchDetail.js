/*******************
    页面：历史隐患查询详情JS
    作者：梁伟超
    日期：2014-02-17
    版本：1.0
*******************/
//$.jqplot('barChart',  [[[1, 2],[3,5.12],[5,13.1],[7,33.6],[9,85.9],[11,219.9]]]);

$(document).delegate("#historyRiskSearchDetailView", "pageinit", function() {
    $(document).bind("pagechange", function(e, data){
        if(typeof data.toPage != "string")
        {
            var d = data.options.data;
            
            getById("historyRiskSearchDetail_city").value = d.ha;
            getById("historyRiskSearchDetail_year").value = d.hy;
            getById("historyRiskSearchDetail_season").value = d.hs;
            
            $('#historyRiskSearchDetail_city').selectmenu('refresh', true);
            $('#historyRiskSearchDetail_year').selectmenu('refresh', true);
            $('#historyRiskSearchDetail_season').selectmenu('refresh', true);
            
            getById("historyRiskSearchDetail_st_title").innerHTML = d.ha + d.hy + d.hs;
            
            //$("#historyRiskSearchDetailView").trigger('create'); 
            
            var s1 = [9726, 2588, 2725, 4184];
            var s2 = [5933, 49, 221, 915];
            var ticks = ['上报率', '黑名单查处', '零隐患检查', '其他抽查'];
            
            $.jqplot('historyRiskSearchDetailBarChart', [s1, s2],
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

function viewChartDetail()
{
     $.mobile.changePage("./historyRiskSearchChartDetail.html",{transition:"slide"});
}







