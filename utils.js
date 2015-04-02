function create_table() {
    var summary = [
      {
        "name":"zhang san",
        "age":24
      },
      {
        "name":"li si",
        "age":42
      },
      {
        "name":"wang wu",
        "age":34
      }
    ];
    var mytable = document.createElement("table");
    var mytablebody = document.createElement("tbody");
    var mycurrent_row,key;
    //create the table header
    var item = summary[0];
    mycurrent_row = document.createElement("tr");
    for (key in item) {
        mycurrent_cell = document.createElement("td");
        currenttext = document.createTextNode(key);
        mycurrent_cell.appendChild(currenttext);
        mycurrent_row.appendChild(mycurrent_cell);
    }
    mytablebody.appendChild(mycurrent_row);
    
    for(var x=0;x<summary.length;x++){
        item = summary[x];
        mycurrent_row = document.createElement("tr");
        for (key in item) {
            mycurrent_cell = document.createElement("td");
            currenttext = document.createTextNode(item[key]);;
            mycurrent_cell.appendChild(currenttext);
            mycurrent_row.appendChild(mycurrent_cell);
        }
        if(x % 2 == 0) mycurrent_row.style.backgroundColor = "yellow";
        mytablebody.appendChild(mycurrent_row);
    }
    
    
    mytable.appendChild(mytablebody);
    mytable.setAttribute("border", "2");
    return mytable;
}

Date.prototype.format = function(format) //author: meizz
{
  var o = {
    "M+" : this.getMonth()+1, //month
    "d+" : this.getDate(), //day
    "h+" : this.getHours(), //hour
    "m+" : this.getMinutes(), //minute
    "s+" : this.getSeconds(), //second
    "q+" : Math.floor((this.getMonth()+3)/3), //quarter
    "S" : this.getMilliseconds() //millisecond
  }
  if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
    (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(var k in o)if(new RegExp("("+ k +")").test(format))
    format = format.replace(RegExp.$1,
      RegExp.$1.length==1 ? o[k] :
        ("00"+ o[k]).substr((""+ o[k]).length));
  return format;
}

if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function() 
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}
