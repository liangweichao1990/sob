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
//page_cur_a当前页,age_dis_a显示条数,page_count_a总页数
var page_cur_a=new Number(0),page_dis_a=new Number(0),page_count_a=new Number(0);
//disposeFunction数据分页回调方法，paging_datajson预留json数据方便回调方法传值
var disposeFunction=new Object(),paging_id,paging_datajson;

//加载底部分页 page页面id，datajson{mobileRqs:"jqm",page_cur:当前页，page_dis:显示条目，[page_count:总页数,type:0]}
function createPagingFooterFooter(page,datajson0,datajson1,dispose){
	var footerHtml =  urlLoadPagingFooterContent("../scripts/pagingFooter/pagingFooter.html");
    paging_id=page;
    $(paging_id).append($(footerHtml));
    disposeFunction=dispose;
    paging_datajson=datajson0;
    //$(paging_id).find("[data-role='header']").trigger('create');
    disposeFunction(paging_datajson,datajson1.page_cur,datajson1.page_dis);
/*    $(page).on("pagebeforehide", function(e){
        e.preventDefault();
    });*/
};
//初始化分页
function pagingFooterInit(datajson){
    page_cur_a=datajson.page_cur||0;    //当前页
    page_dis_a=datajson.page_dis||0;    //显示条数
    page_count_a=datajson.page_count||0;//总页数
    pagingFooterRefresh();
};
//首页
function pagingFooterFirstPage(){
    if(page_cur_a>1){
        page_cur_a=1;
        disposeFunction(paging_datajson,page_cur_a,page_dis_a);
    }
    
};
//上一页
function pagingFooterUpPage(){
    if(page_cur_a>1){
        page_cur_a=page_cur_a-1;
        disposeFunction(paging_datajson,page_cur_a,page_dis_a);
    }
};
//下一页
function pagingFooterNextPage(){
    if(page_cur_a+1<=page_count_a){
        page_cur_a=(page_cur_a+1);
        disposeFunction(paging_datajson,page_cur_a,page_dis_a);
    }
};
//尾页
function pagingFooterLastPage(){
    if(page_cur_a<=page_count_a){
        page_cur_a=page_count_a;
        disposeFunction(paging_datajson,page_cur_a,page_dis_a);
    }
}
//刷新分页动作
function pagingFooterRefresh(){
    $(paging_id).find("#pagingFooter_selectId").html(page_cur_a+"/"+page_count_a);
    $(paging_id).find("#pagingFooter_firstId,#pagingFooter_upId,#pagingFooter_nextId,#pagingFooter_lastId").addClass("ui-disabled");
    if(page_cur_a>1){
        $(paging_id).find("#pagingFooter_firstId,#pagingFooter_upId").removeClass("ui-disabled");
    }
    if(page_cur_a<page_count_a){
        $(paging_id).find("#pagingFooter_nextId,#pagingFooter_lastId").removeClass("ui-disabled");
    }
    if(page_cur_a===page_count_a){
        $(paging_id).find("#pagingFooter_nextId,#pagingFooter_lastId").addClass("ui-disabled");
    }
};