var qiniu = require('qiniu');

    var __ = {};
    
    __.bucketname = "piniing";
    __.bucketDomain = "7xnw9f.com1.z0.glb.clouddn.com";

    __.getUrl = function (key) {
        return qiniu.rs.makeBaseUrl(__.bucketDomain, key);
    }

    /**
     * 生成缩略图
     * @param mode
     * mode 0 限定缩略图的长边最多为<LongEdge>，短边最多为<ShortEdge>，进行等比缩放，不裁剪。
     * 如果只指定 w 参数则表示限定长边（短边自适应），只指定 h 参数则表示限定短边（长边自适应）。
     * 
     * mode 1 限定缩略图的宽最少为<Width>，高最少为<Height>，进行等比缩放，居中裁剪。
     * 转后的缩略图通常恰好是 <Width>x<Height> 的大小（有一个边缩放的时候会因为超出矩形框而被裁剪掉多余部分）。
     * 如果只指定 w 参数或只指定 h 参数，代表限定为长宽相等的正方图。
     * 
     * mode 2 限定缩略图的宽最多为<Width>，高最多为<Height>，进行等比缩放，不裁剪。
     * 如果只指定 w 参数则表示限定宽（长自适应），只指定 h 参数则表示限定长（宽自适应）。
     * 它和模式0类似，区别只是限定宽和高，不是限定长边和短边。从应用场景来说，模式0适合移动设备上做缩略图，模式2适合PC上做缩略图。
     * 
     * mode 3 限定缩略图的宽最少为<Width>，高最少为<Height>，进行等比缩放，不裁剪。
     * 如果只指定 w 参数或只指定 h 参数，代表长宽限定为同样的值。你可以理解为模式1是模式3的结果再做居中裁剪得到的。
     * 
     * mode 4 限定缩略图的长边最少为<LongEdge>，短边最少为<ShortEdge>，进行等比缩放，不裁剪。
     * 如果只指定 w 参数或只指定 h 参数，表示长边短边限定为同样的值。
     * 这个模式很适合在手持设备做图片的全屏查看（把这里的长边短边分别设为手机屏幕的分辨率即可），生成的
     * 图片尺寸刚好充满整个屏幕（某一个边可能会超出屏幕）。
     * 
     * mode 5 限定缩略图的长边最少为<LongEdge>，短边最少为<ShortEdge>，进行等比缩放，居中裁剪。
     * 如果只指定 w 参数或只指定 h 参数，表示长边短边限定为同样的值。
     * 同上模式4，但超出限定的矩形部分会被裁剪。
     */
    __.thumb = function(json) {

        // 生成fop_url
        // ImageView(mode, width, height, quality, format)
        var iv = new qiniu.fop.ImageView(json.mode,json.width,json.height,json.quality,json.format);
        url = iv.makeRequest(json.url);

        return url;

        // // 签名，生成private_url。如果是公有bucket则此步可以省略
        // // 服务端操作使用，或者发送给客户端
        // var policy = new qiniu.rs.GetPolicy();
        // url = policy.makeRequest(url);
    };

    __.exifUrl = function (piclink) {
        // 生成fop_url
        var exif = new qiniu.fop.Exif();
        piclink = exif.makeRequest(piclink);

        // 签名，生成private_url。如果是公有bucket则此步可以省略
        // 服务端操作使用，或者发送给客户端
        var policy = new qiniu.rs.GetPolicy();
        var url =  policy.makeRequest(piclink);

        var http = require('http');

        http.get(url, function(res) {
            res.on('data', function (chunk) {  
                console.log('BODY: ' + chunk.toString());  
            }); 
          console.log("Got response: " + res.statusCode);
        }).on('error', function(e) {
          console.log("Got error: " + e.message);
        });
    };

    __.uptoken = function () {
        var putPolicy = new qiniu.rs.PutPolicy(__.bucketname);
        return putPolicy.token();
    }

    __.uploadFile = function (localFile, key) {
        var extra = new qiniu.io.PutExtra();
          //extra.params = params;
          //extra.mimeType = mimeType;
          //extra.crc32 = crc32;
          //extra.checkCrc = checkCrc;

        qiniu.io.putFile(__.uptoken(), key, localFile, extra, function(err, ret) {
            if(!err) {
              // 上传成功， 处理返回值
              console.log(ret.key, ret.hash);
              // ret.key & ret.hash
              return ret.key;
            } else {
              // 上传失败， 处理返回代码
              console.log(err);
              // http://developer.qiniu.com/docs/v6/api/reference/codes.html
            }
        });
    };

module.exports = __;

    // __.uploadFile("/Users/piniing/Desktop/1439872143lFmpvRKw.jpg.700.jpg", "1439872143lFmpvRKw2");

    // var json = {
    //     url : __.getUrl('me'), 
    //     mode: 1,
    //     width: 300,
    //     height: null
    // };

    // console.log( __.thumb( json ) );
    // __.exifUrl( __.getUrl('IMG_0229.JPG') );








