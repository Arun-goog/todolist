

function submitSignin(callback){

    var userdata =document.getElementById("userNamedata").value;
    var passdata =document.getElementById("passworddata").value;
    

    if( (userdata ==="admin") && (passdata ==="12345")){
        
        callback();

    } else{
        alert("Incorrect Entry")
       
    }

}

function gotodo(){
   
    window.location="todolist.html";
    
}

function call(){

    submitSignin(gotodo);
}



    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var response =JSON.parse(this.responseText);
            var grsdata = '';
            for(var i = 0; i < response.length; i++) {
                if(response[i].completed === true){
                    grsdata += '<tr> <td class="listItem"> <input id="checker" checked="checked" type="checkbox" disabled>'+" " + response[i].title + '</td></tr>';
                }else{
                    grsdata += '<tr> <td class="listItem"> <input id="checker" type="checkbox" onclick="clickEvent(this)">'+" " + response[i].title + '</td></tr>';       

                }     
            }
            document.querySelector('.todolistitem tbody').innerHTML = grsdata;      
        }
    }
    
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    
    

let counter = 0;

function clickEvent(select){
  
    var promis = new Promise(function(resolve,reject){
        if(select.checked === true){
            counter++;     
            if(counter >4){
                resolve("congrats!.. 5 Tasks have been successfully completed!");
            }
        }else{
            counter--;
 
        }
        
    });

    promis.then(function(message){
        alert(message);
    });


}


