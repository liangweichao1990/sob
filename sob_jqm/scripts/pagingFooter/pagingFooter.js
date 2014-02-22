/*function pagingFooterAjax(typed,urled,dataed,contenttyped,successed){
    $.ajax({
              type:typed || "POST", 
              url:urled,// "./../service/person", 
              data:dataed,// '{}', 
              contentType:contenttyped || "application/json",
              success:successed
        });
};*/
// 通过url加载html内容
var urlLoadPagingFooterContent = function(url) {
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
/* $(document).delegate(page, "pageinit", function() {
    $("#pagingFooter_firstId,#pagingFooter_upId").addClass("ui-disabled");
    $(document).bind("pagechange", function(e, data){
        if(typeof data.toPage !== "string")
        {
            var d = data.options.data;
             alert(d.name);
        }
    });
});*/
var page_cur_a=0,page_dis_a=0,page_count_a=0;
var page_to_loadPage;
//加载底部分页 page页面id，datajson{page_cur:当前页，page_dis:显示条目，page_count:总页数}
function createPagingFooterFooter(page,datajson){
    page_to_loadPage=page;
	var footerHtml =  urlLoadPagingFooterContent("../scripts/pagingFooter/pagingFooter.html");
	$(page).append($(footerHtml));
    $(page).on("pagebeforeshow", function(e){
        e.preventDefault();
        pagingFooterInit(datajson);
    });
};
//首页
function pagingFooterFirstPage(){
    if(page_cur_a>1){page_cur_a=1;}
    pagingFooterRefresh();
};
//上一页
function pagingFooterUpPage(){
    if(page_cur_a>1){page_cur_a=page_cur_a-1;}
    pagingFooterRefresh();
};
//下一页
function pagingFooterNextPage(){
    if(page_cur_a+1<=page_count_a){page_cur_a=page_cur_a+1;}
    pagingFooterRefresh();
};
//尾页
function pagingFooterLastPage(){
    if(page_cur_a<=page_count_a){page_cur_a=page_count_a;}
    pagingFooterRefresh();
}
//初始化分页
function pagingFooterInit(datajson){
    page_cur_a=datajson.page_cur;    //当前页
    page_dis_a=datajson.page_dis;    //显示条数
    page_count_a=datajson.page_count;//总页数
    pagingFooterRefresh();
};
function pagingFooterRefresh(){
    $("#pagingFooter_selectId span[class='ui-btn-text']").html(page_cur_a+"/"+page_count_a);
    $("#pagingFooter_firstId,#pagingFooter_upId,#pagingFooter_nextId,#pagingFooter_lastId").addClass("ui-disabled");
    if(page_cur_a>1){
        $("#pagingFooter_firstId,#pagingFooter_upId").removeClass("ui-disabled");
    }
    if(page_cur_a<page_count_a){
        $("#pagingFooter_nextId,#pagingFooter_lastId").removeClass("ui-disabled");
    }
    if(page_cur_a===page_count_a){
        $("#pagingFooter_nextId,#pagingFooter_lastId").addClass("ui-disabled");
    }
}