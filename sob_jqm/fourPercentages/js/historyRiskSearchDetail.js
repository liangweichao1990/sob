/*******************
    页面：历史隐患查询详情JS
    作者：梁伟超
    日期：2014-02-17
    版本：1.0
*******************/
//$.jqplot('barChart',  [[[1, 2],[3,5.12],[5,13.1],[7,33.6],[9,85.9],[11,219.9]]]);
var tha = "";
var thy = "";
var ths = "";

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
            tha = d.ha;
            thy = d.hy;
            ths = d.hs;
            
            //$("#historyRiskSearchDetailView").trigger('create'); 
            
            var data = [
				        	{name : '上报率',value : [9726, 2588, 2725, 4184],color:'#1385a5'},
				        	{name : '黑名单查处',value : [5933, 49, 221, 915],color:'#c56966'}
				      ];
		        	
					new iChart.ColumnMulti2D({
						render : 'historyRiskSearchDetailBarChart',
						data: data,
                        labels:["上报率","黑名单查处","零隐患检查","其他抽查"],
						title : '四个百分率统计图表', 
						showpercent:false,
						decimalsnum:0,
						width : 320,
						height : 400,
                        border:0,
                        background_color: null,
						coordinate:{
							background_color:'#fefefe',
							scale:[{
								 position:'left',	
								 start_scale:0,
								 end_scale:10000,
								 scale_space:1000,
								 listeners:{
									parseText:function(t,x,y){
										return {text:t}
									}
								}
							}]
						}
					}).draw();
            
            
            /*var s1 = [9726, 2588, 2725, 4184];
            var s2 = [5933, 49, 221, 915];
            var ticks = ['上报率', '黑名单查处', '零隐患检查', '其他抽查'];
            
            $.jqplot('historyRiskSearchDetailBarChart', [s1, s2],
                {title:'四个百分率统计图表',
                   seriesDefaults: {renderer:$.jqplot.BarRenderer,pointLabels: {show:true}},
                   series:[{label:'企业总数'},{label:'上报查处数'}],
                   legend: {show:true, location:'n', placement:'inside'},
                   axes: {xaxis: {renderer: $.jqplot.CategoryAxisRenderer,ticks: ticks}
                }
            });*/
            
        }
    });
});

function viewChartDetail()
{
     $.mobile.changePage("./historyRiskSearchChartDetail.html",{transition:"slide",data:{ha:tha,hy:thy,hs:ths}});
}







