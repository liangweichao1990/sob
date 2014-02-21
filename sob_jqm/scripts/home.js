
// 打开菜单中页面
function openPage(url) 
{
    jQuery.mobile.changePage(url,{changeHash: true,transition:"slide"});
}

//$("#btn_fourPercentages").live("tap", function(e){openPage('../fourPercentages/fourPercentages.html')});
