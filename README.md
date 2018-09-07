
# alipay-chatyu - v1.0.1

## Installation

- Using npm:
 ```
    $ npm insatll alipay-chatyu -s
 ```
## alipay_api:[https://doc.open.alipay.com/doc2/apiList?docType=4](https://doc.open.alipay.com/doc2/apiList?docType=4 "alipay文档")

### In Node.js: <br/>
```
    
    const AlipayAPI = require('alipay-chatyu');
    const Fiber = require('fibers'); // Asynchronous to synchronous  

    var ali_conf = {}; //ali_config
        ali_conf.app_id = "xxxxxxx"; //app_id
        ali_conf.public_key_name = "open_rsa_public_key.pem";//public_key name
        ali_conf.private_key_name = "open_rsa_private_key.pem";//private_key name


    //exp： alipay.trade.precreate 

    Fiber(function() {
       var data = {};
	    data.subject = 'shop_name'; //title
	    data.out_trade_no ="001"+(new Date()).valueOf(); //out_trade_no
	    data.total_amount = 1.00; //price
	    data.body ='shop_disc';//disc
       
	    var result =[];
	    try{ 
	        result = AlipayAPI.request(ali_conf,'alipay.trade.precreate',data); //aliapi func_name 
	        if(result.status='成功'){
	         console.log(result);
	        }else{
	            console.log(result.status);
	        }
	    }catch(err){
	       console.log(err);
	    }
	       
    }).run();


    //exp: alipay.trade.query
     Fiber(function() {
      
       var req ={
	        "trade_no":"20170222555", //trade_no
	        "out_trade_no":"" //out_trade_no  
        };
        var result =[];
	    try{
	        result = AlipayAPI.request(ali_conf,'alipay.trade.query',req);
	    }catch(err){
	       console.log(err);
	    }
      
    }).run();

    //exp: alipay.trade.refund 
     Fiber(function() {
      
       var big_content={};
            big_content.trade_no =f.trade_no;
            big_content.out_trade_no=f.order_id;
            big_content.refund_amount = f.refund_amount;
            big_content.refund_reason = f.explain;
        var result =[];
	    try{
	        result =AlipayAPI.request(ali_conf,ali_conf.method,big_content);
	    }catch(err){
	       console.log(err);
	    }
      
    }).run();

    
```


# Attention<br>
-.项目文件名下必须创建config文件，包含内容 为公钥和私钥文件.    

-project<ul>
<li>config
   <ul>
    <li>open_rsa_public_key.pem</li>
    <li>open_rsa_private_key.pem</li> 
   </ul>
<li>
</ul>


### 图例：
  ![image](https://github.com/AntonySufer/node-alipay/blob/master/img/exp.png)
  
                                         
## Support

Tested in  Node.js 6-7, & PhantomJS 2.1.1.<br>
