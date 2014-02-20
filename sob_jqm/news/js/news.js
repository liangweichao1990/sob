/*$(document).on("pageinit", "#news_View", initPage2);
     
 function initPage2(event) {
     $.getScript("./news/js/news.js");
     $.ajax({   type: "POST",
            url: "./news/news.html",
            data: "",
            success: function(msg) {
                alert(msg);
                //$("#a").html(msg);
                //$('#a').listview('refresh').footer('refresh');
            }
        });
       $(document).off('pageinit', '#news_View', initPage2);
 };*/
//加载新闻资讯搜navbar
function createNewsNavbar(page,url,active){
	if (url) {
		var footerHtml = '';
		if (!footerHtml) {
			footerHtml = urlLoadNewsContent(url);
		}
		//$(page).find("[data-role='navbar']").append(footerHtml);
        //$(page).find("[data-role='navbar'] a:eq("+active+")").toggleClass("ui-btn-active");
		$(page).children("script").after(footerHtml);
        $(page).find("[data-role='header'] h1").html($(page).attr("data-title"));
        $(page).find("[data-role='navbar'] a:eq("+active+")").toggleClass("ui-btn-active");
	}
}
//加载新闻资讯搜索popup
function createNewsContent(page,url){
	if (url) {
		var footerHtml = '';
		if (!footerHtml) {
			footerHtml = urlLoadNewsContent(url);
		}
		$(page).append(footerHtml);
	}
}
// 通过url加载html内容
var urlLoadNewsContent = function(url) {
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
//页面刷新
function pageRefresh(){
	$.mobile.pageContainer.trigger("create");
}
//加载导航所指页面
function openNewsNavbarPage(url){
    $.mobile.changePage(url,{transition:"slide"});
}
// 打开最新资讯详情页面
function openNewsDetailPage()
{
    $.mobile.changePage("../news/newsDetail.html",{transition:"slide"});
}