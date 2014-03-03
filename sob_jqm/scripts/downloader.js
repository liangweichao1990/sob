/*function Downloader() {}

Downloader.prototype.downloadFile = function(fileUrl, params, win, fail) {
	
	if (!fail) win = params;
	cordova.exec(win, fail, "Downloader", "downloadFile", [fileUrl, params]);
};

//PhoneGap.addConstructor(function() {
//	PhoneGap.addPlugin("Downloader", new Downloader());
//	PluginManager.addService("Downloader", "com.phonegap.plugins.downloader.Downloader");
//});
if (!window.downloader) {
    window.downloader = new Downloader();
}*/
window.appRootDirName = "download_test";
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
}

function fail() {
    console.log("failed to get filesystem");
}

function gotFS(fileSystem) {
    window.fileSystem = fileSystem;
    fileSystem.root.getDirectory(window.appRootDirName, {create : true,exclusive : false}, dirReady, fail);
}

function dirReady(entry) {
    window.appRootDir = entry;
}

//fileUrl-文件路径,fileName-文件下载到本地名称{包含后缀}
downloadFile = function(fileUrl,fileName) {
    if(fileUrl===''||fileName===''){
        navigator.notification.alert("亲，没有这个文件，可能已经删除！", function() {}, "提示", "确定");
        return false;
    }
    var fileTransfer = new FileTransfer();
    var uri = encodeURI(fileUrl);
    var filePath = window.appRootDir.fullPath + "/"+fileName;
    
    fileTransfer.download(
        uri,
        filePath,
        function(entry) {
            navigator.notification.alert("成功下载文件，保存地址为:"+entry.fullPath, function() {}, "提示", "确定");
            console.log("download complete: " + entry.fullPath);
        },
        function(error) {
            navigator.notification.alert("发生错误错误代码为:"+eJSON.stringify(error), function() {}, "提示", "确定");
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("upload error code" + error.code);
        }
        );
}