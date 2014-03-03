/*******************
    页面：登录页面JS
    作者：邓世瑛、梁伟超
    日期：2014-02-17
    版本：1.0
*******************/

//$.mobile.selectmenu.prototype.options.nativeMenu = false;

// 登录按钮动态样式
function loginonMouseOver()
{
    $("#btn_login").css('background', "url(./styles/home/images/loginbtn_click.png)");
    $("#btn_login").css('background-repeat', "no-repeat");
    $("#btn_login").css('background-size', "100% 100%");
}

// 登录按钮动态样式
function loginonMouseOut()
{
    $("#btn_login").css('background', "url(./styles/home/images/loginbtn.png)");
    $("#btn_login").css('background-repeat', "no-repeat");
    $("#btn_login").css('background-size', "100% 100%");
}

/*登录*/
function login() 
{
    
    jQuery.mobile.changePage("home.html",{changeHash: true,transition:"slide"});
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
        data:{username:a,password:b},
        dataType:"json",
        url:"http://" + domain + "/webas/login1.do",
    }).done(function (data) {
        if (data.res == "true") 
        {
            // 进行记住用户名和密码的操作
            if($("#savePassword").val() == "1")
            {
                localStorage.setItem("username",a);
                localStorage.setItem("password",b);
            }
            else
            {
                localStorage.setItem("username",a);
                localStorage.setItem("password","");
            }
            
            // 打开主菜单页面
            jQuery.mobile.changePage("home.html",{changeHash: true,transition:"slide"});
        }
        else 
        {
            navigator.notification.alert("登录失败,请检查用户名或密码!", function() {}, "登录提示", "点我继续");
            return false;
        }
    }).fail(function () {
        navigator.notification.alert("亲，您登录失败，请检查网络是否开启等故障！", function() {}, "登录提示", "明白");
        return false;
    });*/
}

// 通过id获取对象
function getById(id)
{
    return document.getElementById(id);
}

// 退出应用 
function exit()
{
    navigator.app.exitApp(); 
}


