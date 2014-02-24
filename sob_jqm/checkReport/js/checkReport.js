// 界面切换不带历史记录
function cr_search_page(pageurl)
{
    $.mobile.changePage(pageurl,{changeHash:false,transition:"slide"});
}

// 界面切换带历史记录
function cr_search_page_on(pageurl)
{
    $.mobile.changePage(pageurl,{changeHash:true,transition:"slide"});
}

// 通过url加载html内容
var cr_urlLoadContent = function(url) {
	var cr_content = "";
	$.ajax({
		url : url,
		type : 'GET',
		dataType : "html",
		async : false,
		success : function(html, textStatus, xhr) {
			cr_content = html;
		},
		error : function(xhr, textStatus, errorThrown) {
			cr_content = "";
		}
	});
	return cr_content;
};

//加载头部菜单栏
function createHeader(pageid){
    //alert($.mobile.activePage.attr( "id" ));        当前活动pageid
    $("#" + pageid).prepend(cr_urlLoadContent("../checkReport/cr_header.html"));
}





 