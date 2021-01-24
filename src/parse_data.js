var base_datas;


function prepare_data(){
    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", "data/base_data.csv", true); // アクセスするファイルを指定
    req.send(null); // HTTPリクエストの発行
  
    // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
    req.onload = function(){
	    convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
    }

}
 
function convertCSVtoArray(str){
    var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成
 
    var _base_datas = {};
    var tmp_data = {};
    var id_name;

    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for(var i = 0; i < tmp.length; i++){
        parsed = tmp[i].split(',');

        tmp_data = {};

        id_name = parsed[0];
        tmp_data["jp_name"] = parsed[1];
        tmp_data["en_name"] = parsed[2];

        country = [];
        for (var c of parsed[3].split(" ")){
            country.push([c]);
        }

        tmp_data["residence_country"] = country;
        tmp_data["discription"] = parsed[4];

        _base_datas[id_name] = tmp_data;
    }
    base_datas =  _base_datas;
}


function get_detail(imori_id){
  return base_datas[imori_id];
}
