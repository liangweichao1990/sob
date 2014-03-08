/*******************
    页面：主菜单页面JS
    作者：梁伟超
    日期：2014-02-17
    版本：1.0
*******************/

var currentDate = new Date();
var currentYear = currentDate.getFullYear();        // 当前年份
var currentMonth = currentDate.getMonth() + 1;      // 当前月份
var currentSeason = "";                             // 当前季度
var currentHalfYear = "";                           // 当前半年 (下半年、下半年)

var deviceWidth = $(window).width();                // 设备页面的宽度
var deviceHeight = $(window).height();              // 设备页面的高度
var domain = "192.168.0.119:8080/SOB";              // 对接后台的路径域名
var downloadDomain = "192.168.0.119:8080";          // 对接下载路径域名
var projectLocalPath;                           // 获取项目的根路径

// 取当前的季度和半年值
switch(currentMonth)
{
    case 1:
    case 2:
    case 3:
        currentSeason = "1";
        currentHalfYear = "5";
        break;
    case 4:
    case 5:
    case 6:
        currentSeason = "2";
        currentHalfYear = "5";
        break;
    case 7:
    case 8:
    case 9:
        currentSeason = "3";
        currentHalfYear = "6";
        break;
    case 10:
    case 11:
    case 12:
        currentSeason = "4";
        currentHalfYear = "6";
        break;
}

function ConvertJSONDateToJSDateObject(JSONDateString) 
{ 
    if(JSONDateString===null)return "";
    var date = new Date(parseInt(JSONDateString.time, 10)); 
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return date.getFullYear() + "-" + month + "-" + currentDate+" "+date.getHours()+":"+date.getMinutes();
} 

// 打开菜单中页面
function openPage(url) 
{
    jQuery.mobile.changePage(url,{changeHash: true,transition:"slide"});
}
