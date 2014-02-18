//var app = new kendo.mobile.Application();
function loginonMouseOver()
{
    $("#btn_login").css('background', "url(./styles/home/images/loginbtn_click.png)");
    $("#btn_login").css('background-repeat', "no-repeat");
    $("#btn_login").css('background-size', "100% 100%");
}

function loginonMouseOut()
{
    $("#btn_login").css('background', "url(./styles/home/images/loginbtn.png)");
    $("#btn_login").css('background-repeat', "no-repeat");
    $("#btn_login").css('background-size', "100% 100%");
}

// 退出应用 
function exit()
{
    navigator.app.exitApp(); 
}

/*登录*/
function login() 
{
    jQuery.mobile.changePage("home.html",{changeHash: "false",transition:"fade"});
    //app.navigate("home.html");
    /*var a = $("#userName").val();
    var b = $("#passWord").val();
    if (a == "" || a == null) {
        navigator.notification.alert("小伙伴们，用户名不能为空！", function() {}, "登录提示", "点我继续");
        return false;
    }
    if (b == "" || b == null) {
        navigator.notification.alert("小伙伴们，请输入密码！", function() {}, "登录提示", "点我继续");
        return false;
    }
    return $.ajax({
        type: "Post",
        data:{a:a,b:b},
        dataType:"html",
        url:"http://192.168.0.119:8080/SOB/webas/login.do",
    }).done(function (data) {*/
           
        /**if (data.result == true) {
             app.navigate("home.html");
        }
        else 
        {
            navigator.notification.alert(data.content, function() {}, "登录提示", "点我继续");
            return false;
        }**/
    /*}).fail(function () {
        navigator.notification.alert("亲，您登录失败，请检查网络是否开启等故障！", function() {}, "登录提示", "明白");
        return false;
    });*/
}
