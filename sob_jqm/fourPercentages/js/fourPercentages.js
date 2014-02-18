/*******************
    页面：四个百分率JS
    作者：梁伟超
    日期：2014-02-17
    版本：1.0
*******************/

// 季度查询
function seasonSearch(type)
{
    alert(type);
}

// 打开历史隐患查询页面
function openHistoryRiskSearchPage()
{
    $.mobile.changePage("./historyRiskSearch.html",{changeHash: true, transition:"slide"});
}
    



