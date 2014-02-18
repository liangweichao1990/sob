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

// 季度选择
function seasonSelect(type, id)
{
    historyRisk_season = type;
}

// 开始搜索
function historyRiskSearch()
{
    historyRisk_year = $("#historyRisk_year").val();
    if(historyRisk_area != "" && historyRisk_season != "")
    {
        $.mobile.changePage("./historyRiskSearchDetail.html",{changeHash: true,transition:"slide"});
    }
    else if(historyRisk_area == "")
    {
        $().toastmessage('showToast', {text:'请选择区域!',sticky:false,position:'middle-center',type:'error',closeText:'',close:function(){}});
        // success notice warning error
    }
    else if(historyRisk_year == "")
    {
        $().toastmessage('showToast', {text:'请选择年份!',sticky:false,position:'middle-center',type:'error',closeText:'',close:function(){}});
    }
    else if(historyRisk_season == "")
    {
        $().toastmessage('showToast', {text:'请选择季度!',sticky:false,position:'middle-center',type:'error',closeText:'',close:function(){}});
    }
}
