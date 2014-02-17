
var area = ""
var year = "";
var season = "";

// 区域选择
function areaSelect(type, id)
{
    area = type;
    //document.getElementById(id).disabled = "disabled";
    $("#" + id).button( "disabled" );
    //alert($("#" + id).attr("disabled"));
}

// 年份选择
function yearSelect()
{
    alert("年份选择");
}

// 季度选择
function seasonSelect(type, id)
{
    season = type;
    alert(type);
}