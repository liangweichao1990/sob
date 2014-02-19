 
// 界面切换
function cr_search_page(pageurl)
{
    $.mobile.changePage(pageurl,{changeHash:false,transition:"slide"});
}

// 通过url加载html内容
var urlLoadContent = function(url) {
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
    
    $("#" + pageid).prepend(urlLoadContent("../checkReport/cr_header.html"));
}


 