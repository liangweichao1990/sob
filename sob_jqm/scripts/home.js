var currentDate = new Date();
var currentYear = currentDate.getFullYear();        // 当前年份
var currentMonth = currentDate.getMonth() + 1;      // 当前月份
var currentSeason = "";                             // 当前季度
var currentHalfYear = "";                           // 当前半年 (下半年、下半年)

var deviceWidth = $(window).width();
var deviceHeight = $(window).height();

// 取当前的季度和半年值
switch(currentMonth)
{
    case 1:
    case 2:
    case 3:
        currentSeason = "一季度";
        currentHalfYear = "上半年";
        break;
    case 4:
    case 5:
    case 6:
        currentSeason = "二季度";
        currentHalfYear = "上半年";
        break;
    case 7:
    case 8:
    case 9:
        currentSeason = "三季度";
        currentHalfYear = "下半年";
        break;
    case 10:
    case 11:
    case 12:
        currentSeason = "四季度";
        currentHalfYear = "下半年";
        break;
}

// 打开菜单中页面
function openPage(url) 
{
    jQuery.mobile.changePage(url,{changeHash: true,transition:"slide"});
}
