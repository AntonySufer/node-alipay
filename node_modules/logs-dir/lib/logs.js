/**日志功能
创建时间：2018-08-21
创建人：一点
*/
var fs = require("fs");
var path = require('path');
var logs = {};

/**
 * type  logs_name
 * data  数据
 */
logs.write = function(type,data){
	var dir = path.resolve(__dirname ,'../../../_logs/');
	console.log('进来了');
    console.log(dir);
	if(fs.existsSync(dir) == false){
		fs.mkdirSync(dir);
	}
	dir = dir +'/'+type
	if(fs.existsSync(dir) == false){
		fs.mkdirSync(dir);
	}
	var date = new Date();
	var day = 	date.getDate();
	var month = date.getMonth()+ 1;
	var year = date.getUTCFullYear();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds()

	fs.appendFileSync(dir+'/'+year+'-'+month+'-'+day+'.txt', '---'+year+'-'+month+'-'+day+' '+hours+':'+minutes+':'+seconds+'【'+data+'】\n');
}

module.exports = logs;