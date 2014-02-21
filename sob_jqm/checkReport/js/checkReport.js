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
        
        var data3 = [
            	{name : '上季度黑名单企业465家',value : 12,color:'#9d4a4a'},
            	{name : '上季度上报无隐患企业123家',value : 9,color:'#5d7f97'},
            	{name : '其它企业12319999999家',value : 4,color:'#97b3bc'}
        ];
    	        	
        new iChart.Pie2D({
        	render : 'canvasDiv',
        	data: data3,
        	title : '',
            border:0,
            width : 300,
        	height : 300,
            offsety : -45,
            offsetx : -10,
            bound_event:null,
            default_mouseover_css:false,
            turn_off_touchmove:true,
            background_color:null,
        	legend : {
        		enable : true,
                background_color:null,
                valign : 'bottom',
                align :  'center',
                border : 1,
                offsety : 10
        	},
    		sub_option : {
                    mini_label_threshold_angle : 360,  //低于40度显示在外面
                    mini_label:{                       //迷你label配置项，设置其中内容字体大小，颜色
						fontsize:20,
						fontweight:300,
						color : '#ffffff'
					},
					label : {
							background_color:null,
							sign:false,//设置禁用label的小图标
							padding:'0 4',
							border:{
								enable:false,
								color:'#666666'
							},
							fontsize:20,
							fontweight:300,
							color : '#4572a7'
				    },
					border : {
							width : 2,
							color : '#ffffff'
					},
        			listeners:{
        				parseText:function(d, t){
        					return d.get('value') + "%";        //自定义label文本
        				}
        			} 
		   }
 
        }).draw();
            
        });
    
});







 