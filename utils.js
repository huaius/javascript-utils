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
