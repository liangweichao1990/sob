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
            var d = data.options.data;
            
            var data2 = [
				        	{name : '上报率',value : [8000, 2588, 2725, 4184],color:'#1385a5'},
				        	{name : '黑名单查处',value : [5933, 49, 221, 915],color:'#c56966'}
				      ];
		        	
					new iChart.ColumnMulti2D({
						render : 'historyRiskSearchDetailBarChart2',
						data: data2,
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
        }
    });
});