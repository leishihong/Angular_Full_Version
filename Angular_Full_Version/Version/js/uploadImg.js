var express = require('express');
/*var util = require('util');*/
/*var path = require('path');*/
var fs = require('fs');
var formidable = require('formidable');
var router = express.Router();

router.post('/uploads', function(req, res, next) {
    //生成multiparty对象，并配置下载目标路径
   var form = new formidable.IncomingForm();   //创建上传表单
      form.encoding = 'utf-8';        //设置编辑
      form.uploadDir = 'D:/RiKNode/Angular_Full_Version/Version/public/';     //设置上传目录
      form.keepExtensions = true;     //保留后缀
      form.maxFieldsSize = 1 * 1024 * 1024;   //文件大小
   //下载后处理
  form.parse(req, function(err, fields, files) {
   
     // var filesTmp = JSON.stringify(files,null,2);
    if(err){
      console.log('parse error: ' + err);
     } else {
       // console.log('parse files: ' + filesTmp);  
       
       var inputFile = files.uploadfile;
      
       var uploadedPath = inputFile.path;
       console.log(uploadedPath)

       var dstPath = 'D:/RiKNode/Angular_Full_Version/Version/public/' + inputFile.name;

       //重命名为真实文件名
       fs.rename(uploadedPath, dstPath, function(err) {
        
          if(err){
             console.log('rename error: ' + err);
          } else {
           console.log('rename ok');
           console.log(res.send("hello world"))
         }
       });
    }
     /*res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
     res.write('received upload:\n\n');
     res.end(util.inspect({fields: fields, files: filesTmp}));
    res.render('upload',{
        title:"上传"
    });
    res.send({fileName:dstPath})*/
  });
    

});

module.exports = router;
