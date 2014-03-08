//加载督查督办navbar page('#pageid'),url('xxxxx.html'),active('选中导航下标[0]|[1]|[...]')
function createEmergencyNavbar(page,active){
    var footerHtml = urlLoadEmergencyContent("../emergency/emergencyNavbar.html");
    $(page).children("script").after(footerHtml);
    //$(page).find("[data-role='header'] h1").html("应急处置列表");
    $(page).find("[data-role='navbar'] a:eq("+active+")").toggleClass("ui-btn-active");
}
//加载督查督办搜索popup
function createEmergencyContent(page){
    var footerHtml =urlLoadNewsContent("../emergency/emergencyPopup.html");
    $(page).append(footerHtml);
}
// 通过url加载html内容
var urlLoadEmergencyContent = function(url) {
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
var emergencyFunciton=function(datajson,page_cur,page_dis){
    $(paging_id).find("[data-role='listview']").empty();
     $.ajax({
        type: "Post",
        data:{type:datajson.type,name:$(paging_id+" #emergency_seek").val()||"",mobileRqs:'jqm',queryCurPageNum:page_cur,queryRecNumPerPage:page_dis},
        dataType:"json",
        url:"http://"+domain+"/emergency/Emergency/queryEmergencyList.do"
    }).done(function (data) {
        var datapage=data[0];
        pagingFooterInit({page_cur:Number(datapage.queryCurPageNum),page_dis:Number(datapage.queryRecNumPerPage),page_count:Number(datapage.queryTotalPageNum)});
        
        if(Number(data[1].length)===0){
            $(paging_id).find("[data-role='listview']").append("<li data-icon='false'><a href='#' style='text-align:center;'>暂无数据</a></li>");
            $(paging_id).find("[data-role='listview']").listview("refresh");
            return false;
        }
        $(data[1]).each(function(i,emergency){
            var tempdata=emergency;
            var temp=$('#emergency_theme_li').clone();
            temp.find("[dbField='emergency_li_a']").attr("onclick","openEmergencyDetailPage('"+tempdata.id+"');");
            temp.find("[dbField='emergency_title']").html(tempdata.name);
            
            $(paging_id).find("[data-role='listview']").append(temp);
        });
        $(paging_id).find("[data-role='listview']").listview("refresh");
        return false;
    }).fail(function () {
        $(paging_id).find("[data-role='listview']").append("<li data-icon='false'><a href='#' style='text-align:center;'>网络故障,加载失败!</a></li>");
        $(paging_id).find("[data-role='listview']").listview("refresh");
        return false;
    });
};
//加载导航所指页面
function openEmergencyNavbarPage(url){
    $.mobile.changePage(url,{transition:"slide"});
}
var emergency_detailId='';
// 打开最新资讯详情页面
function openEmergencyDetailPage(detail_id)
{
    emergency_detailId=detail_id;
    $.mobile.changePage("../emergency/emergencyDetail.html",{transition:"slide"});
}