// 界面切换
function cr_search_page(pageurl)
{
    $.mobile.changePage(pageurl,{changeHash:false,transition:"slide"});
}

// 通过url加载html内容
var cr_urlLoadContent = function(url) {
	var content = "";
	$.ajax({
		url : url,
		type : 'GET',
		dataType : "html",
		async : false,
		success : function(html, textStatus, xhr) {
			content = html;
		},
		error : function(xhr, textStatus, errorThrown) {
			content = "";
		}
	});
	return content;
};

//加载头部菜单栏
function createHeader(pageid){
    //alert($.mobile.activePage.attr( "id" ));        当前活动pageid
    //alert(urlLoadContent("http://192.168.0.119:8080/SOB/json.html"));
    
    $("#" + pageid).prepend(cr_urlLoadContent("../checkReport/cr_header.html"));
}

//图表
$(document).delegate("#cr_overall", "pageinit", function() {
    
    $(document).bind("pagechange", function(e, data){
        
        var data = [
            ['上季度黑名单企业465家', 12],['上季度上报无隐患企业123家', 9], ['其它企业12319999999家，已抽查121家', 14]
        ];
        
        var plot1 = $.jqplot('barChart',[data], {
            seriesColors: [ "#4bb2c5", "#c5b47f", "#EAA228", "#579575", "#839557", "#958c12",      
            "#953579", "#4b5de4", "#d8b83f", "#ff5800", "#0085cc"],                    //颜色设置
            grid:{  
                    background: "transparent",
                    borderWidth: 0,
                    shadow: false
            },
            seriesDefaults: {
                    renderer:$.jqplot.PieRenderer,
                    shadow: false,
                    rendererOptions: {
                          showDataLabels:true,
                          //dataLabels:'value'        显示值
                    }
            }, 
            legend: { show:true,location:'s'}
        });
        
        
    });
    
});


 