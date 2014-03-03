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
//加载新闻资讯搜navbar page('#pageid'),url('xxxxx.html'),active('选中导航下标[0]|[1]|[...]')
function createNewsNavbar(page,url,active){
	if (url) {
		var footerHtml = '';
		if (!footerHtml) {
			footerHtml = urlLoadNewsContent(url);
		}
		$(page).children("script").after(footerHtml);
        //$(page).find("[data-role='header'] h1").html("最新资讯列表");
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
var tempFunciton=function(datajson,page_cur,page_dis){
     $.ajax({
        type: "Post",
        data:{type:datajson.type,title:$(paging_id+" #news_seek").val()||"",mobileRqs:'jqm',queryCurPageNum:page_cur,queryRecNumPerPage:page_dis},
        dataType:"json",
        url:"http://"+domain+"/news/News/queryNewsList.do"
    }).done(function (data) {
        var datapage=data.list.page;
        pagingFooterInit({page_cur:Number(datapage.curPageNum),page_dis:Number(datapage.recNumPerPage),page_count:Number(datapage.totalPageNum)});
        $(paging_id).find("[data-role='listview']").empty();
        if($.isEmptyObject(data.list.records)){
            $(paging_id).find("[data-role='listview']").append("<li data-icon='false'><a href='#'>暂无数据</a></li>");
            $(paging_id).find("[data-role='listview']").listview("refresh");
            return false;
        }
        $(data.list.records.record).each(function(i,tedat){
            var tempdata=tedat;
            var temp=$('#theme_li').clone();
            temp.find("[dbField='news_li_a']").attr("onclick","openNewsDetailPage('"+tempdata.element[0].text+"');");
            temp.find("[dbField='news_title']").html(tempdata.element[1].text);
            var imagetemp='';imagetemp=tempdata.element[2].text;
            if(imagetemp===undefined||imagetemp==='undefined'){
                temp.find("[dbField='news_images']").attr("src",'images/news.png');
            }else{
                temp.find("[dbField='news_images']").attr("src","http://"+downloadDomain+'/'+imagetemp);
            }
            if(Number(tempdata.element[5].text)===1){
                temp.find("[dbField='news_content']").parent().prepend('<img src="images/hot.png" height="15px"/>');
            }
            temp.find("[dbField='news_content']").html(tempdata.element[3].text);
            temp.find("[dbField='news_time']").html(tempdata.element[4].text);
            $(paging_id).find("[data-role='listview']").append(temp);
        });
        $(paging_id).find("[data-role='listview']").listview("refresh");
        return false;
    }).fail(function () {
        navigator.notification.alert("亲，第三方加载失败，请检查网络是否开启等故障！", function() {}, "提示", "确定");
        return false;
    });
};
//页面刷新
function pageRefresh(){
	$.mobile.pageContainer.trigger("create");
}
//加载导航所指页面
function openNewsNavbarPage(url){
    $.mobile.changePage(url,{transition:"slide"});
}
var news_detailId='';
// 打开最新资讯详情页面
function openNewsDetailPage(detail_id)
{
    news_detailId=detail_id;
    $.mobile.changePage("../news/newsDetail.html",{transition:"slide"});
}