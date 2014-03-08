//加载督查督办navbar page('#pageid'),url('xxxxx.html'),active('选中导航下标[0]|[1]|[...]')
function createInspectorNavbar(page,active){
    var footerHtml = urlLoadInspectorContent("../inspector/inspectorNavbar.html");
    $(page).children("script").after(footerHtml);
    //$(page).find("[data-role='header'] h1").html("督查督办列表");
    $(page).find("[data-role='navbar'] a:eq("+active+")").toggleClass("ui-btn-active");
}
//加载督查督办搜索popup
function createInspectorContent(page){
    var footerHtml =urlLoadInspectorContent("../inspector/inspectorPopup.html");
    $(page).append(footerHtml);
}
// 通过url加载html内容
var urlLoadInspectorContent = function(url) {
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
var inspectorFunciton=function(datajson,page_cur,page_dis){
    $(paging_id).find("[data-role='listview']").empty();
     $.ajax({
        type: "Post",
        data:{type:datajson.type,name:$(paging_id+" #inspector_seek").val()||"",mobileRqs:'jqm',queryCurPageNum:page_cur,queryRecNumPerPage:page_dis},
        dataType:"json",
        url:"http://"+domain+"/inspector/Inspector/queryInspectorList.do"
    }).done(function (data) {
        var datapage=data[0];
        pagingFooterInit({page_cur:Number(datapage.queryCurPageNum),page_dis:Number(datapage.queryRecNumPerPage),page_count:Number(datapage.queryTotalPageNum)});
        
        if(Number(data[1].length)===0){
            $(paging_id).find("[data-role='listview']").append("<li data-icon='false'><a href='#' style='text-align:center;'>暂无数据</a></li>");
            $(paging_id).find("[data-role='listview']").listview("refresh");
            return false;
        }
        $(data[1]).each(function(i,inspector){
            var tempdata=inspector;
            var temp=$('#inspector_theme_li').clone();
            temp.find("[dbField='inspector_li_a']").attr("onclick","openInspectorDetailPage('"+tempdata.id+"');");
            temp.find("[dbField='inspector_title']").html(tempdata.name);
            if(Number(tempdata.isHot)===0){
                temp.find("[dbField='inspector_images']").attr("src",'images/list_icon.png');
            }else{
                temp.find("[dbField='inspector_images']").attr("src",'images/hot.png');
            }
            temp.find("[dbField='inspector_time']").html(ConvertJSONDateToJSDateObject(tempdata.createDate).substr(0,10));
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
function openInspectorNavbarPage(url){
    $.mobile.changePage(url,{transition:"slide"});
}
var inspector_detailId='';
// 打开最新资讯详情页面
function openInspectorDetailPage(detail_id)
{
    inspector_detailId=detail_id;
    $.mobile.changePage("../inspector/inspectorDetail.html",{transition:"slide"});
}