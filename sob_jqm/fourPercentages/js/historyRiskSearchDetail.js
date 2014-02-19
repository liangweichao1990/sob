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
            
            $("#historyRiskSearchDetailView").trigger('create');
            
            var plot2 = $.jqplot('barChart', [
        [[2,1], [4,2], [6,3], [3,4]], 
        [[5,1], [1,2], [3,3], [4,4]], 
        [[4,1], [7,2], [1,3], [2,4]]], {
        seriesDefaults: {
            renderer:$.jqplot.BarRenderer,
            // Show point labels to the right ('e'ast) of each bar.
            // edgeTolerance of -15 allows labels flow outside the grid
            // up to 15 pixels.  If they flow out more than that, they 
            // will be hidden.
            pointLabels: { show: true, location: 'e', edgeTolerance: -15 },
            // Rotate the bar shadow as if bar is lit from top right.
            shadowAngle: 135,
            // Here's where we tell the chart it is oriented horizontally.
            rendererOptions: {
                barDirection: 'horizontal'
            }
        },
        axes: {
            yaxis: {
                renderer: $.jqplot.CategoryAxisRenderer
            }
        }
    });
            
        }
            
    
    });
});






