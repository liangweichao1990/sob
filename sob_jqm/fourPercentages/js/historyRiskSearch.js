/*******************
    页面：历史隐患查询JS
    作者：梁伟超
    日期：2014-02-17
    版本：1.0
*******************/

var historyRisk_area = "";
var historyRisk_year = "";
var historyRisk_season = "";

// 区域选择
function areaSelect(type, id)
{
    historyRisk_area = type;
}

// 年份选择
function yearSelect()
{
    historyRisk_year = $("#historyRisk_year").val();
}

// 季度选择
function seasonSelect(type, id)
{
    historyRisk_season = type;
}

// 开始搜索
function historyRiskSearch()
{
    $.mobile.changePage("./historyRiskSearchDetail.html",{changeHash: "false",transition:"slide"});
}
