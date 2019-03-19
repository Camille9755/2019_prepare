
/***************************	������˴���	***********************************/
//���� script ��ǩ
function addScriptTag(src) {
  var script = document.createElement('script');
  script.setAttribute("type","text/javascript");
  script.src = src;
  document.body.appendChild(script);
}
 
//ʧȥ�����ʱ����ӱ�ǩ
document.getElementById('name').onblur = function () {
  var userNameKeyValue = 'userName=' + this.value
  var url = 'http://localhost:3000/ajax/test/check/jsonp?callback=appendHtml' + '&' + userNameKeyValue;
  //http://localhost:3000/ajax/test/check/jsonp?callback=appendHtml&userName=bajie
  addScriptTag(url);
}
 
 
//����Ĺ��ܺ���
function appendHtml(data) {
	console.log(data);
	document.getElementById('resultSpan').innerHTML = data.result;
}



/***************************	�������˷��ص�ֵ	***********************************/
appendHtml({
  "result" : '<span style="color:green"> ���� </span>'
});


/***************************	�������˴���	***********************************/

router.get('/ajax/test/check/jsonp/js', function (req, res, next) {
    var userName = req.query.userName;
    var callback = req.query.callback;
    
    console.log('/ajax/test/check/jsonp', userName, callback);
    var obj = {};
    if('wukong' === userName){
        obj.result = '<span style="color:red"> ������</span>';
    }else {
        obj.result = '<span style="color:green"> ����</span>';
    }	
    var jsStr = callback + '('+ JSON.stringify(obj) +');';
	console.log(jsStr);
    res.send(jsStr);
});




