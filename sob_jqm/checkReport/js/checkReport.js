// 界面切换不带历史记录
function cr_search_page(pageurl)
{
    $.mobile.changePage(pageurl,{changeHash:true,transition:"slide"});
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

//截取出url中的参数
function cr_getUrlParam(string) {  
	var obj =  new Array();  
	if (string.indexOf("?") != -1) {  
		var string = string.substr(string.indexOf("?") + 1); 
		var strs = string.split("&");  
		for(var i = 0; i < strs.length; i ++) {  
			var tempArr = strs[i].split("=");  
			obj[i] = tempArr[1];
		}  
	}  
	return obj;  
}





 