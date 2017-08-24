/*
 创建人: ChatYu
 创建内容:测试支付  
 创建时间:2017.05.19

 */

const logs = require('logs-dir');
const Fiber = require('fibers');
const AlipayAPI = require('../lib/alipay_api.js');

var ali_conf = {};
    ali_conf.app_id = "xxxxxx"; //app_id
    ali_conf.public_key_name = "open_rsa_public_key.pem";//私钥文件名
    ali_conf.private_key_name = "open_rsa_private_key.pem";//公钥地址名

    // Fiber(function() {
    //     var result =aliPay(ali_conf);
    //     if(result.状态='成功'){
    //      console.log(result);
         
    //     }else{
    //         console.log('哈哈');
    //     }
    // }).run();



    Fiber(function() {
      
        var result =query_aliPay(ali_conf);
        if(result.状态='成功'){
         console.log(result);
         
        }else{
            console.log('哈哈1');
        }
    }).run();



 //write_log('支付宝结果',result);


 //统一下单
function aliPay(ali_conf){
    var data = {};
    data.subject = '产品名'; //标题
    data.out_trade_no ="001"+(new Date()).valueOf(); //商户号
    data.total_amount = 1.00; //钱
    data.body ='产品详情';

    var result =[];
  
    try{
        
        result = AlipayAPI.request(ali_conf,'alipay.trade.precreate',data);
    
    }catch(err){
       console.log(err);
    }
    return result;

}

 //统一订单查询
 function query_aliPay(ali_conf){
   
    var req ={
        "trade_no":"", //商户订单号
        "out_trade_no":"20171111111111111" //支付订单号
      };
    var result =[];
    try{
        
        result = AlipayAPI.request(ali_conf,'alipay.trade.query',req);
    
    }catch(err){
       console.log(err);
    }
    return result;
}





/***
 * 记录日志
 * @param expain 说明
 * @param datas 错误数据 string or object
 */
function write_log(expain,datas) {
    var string_re =datas ;
    if (typeof (string_re) =='object'){
        string_re =JSON.stringify(string_re);
    }
    logs.write('alipay','\n');
    logs.write('alipay','*******************aliplay日志logs s********************************');
    logs.write('alipay',expain+'\n'+string_re);
    logs.write('alipay','*******************aliplay日志e**************************************');
    logs.write('alipay','\n');
    return ;
}



