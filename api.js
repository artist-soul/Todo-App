function ajax(){
 
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){

        if(this.readyState==4 && this.status==200){
            var response= JSON.parse(this.responseText);
            var output ="";
            for(var i=0;i<20;i++){

               output +=  "<li>"+response[i].title;+"</li>";


               $.each(response[i], function (key, value) {
                if(key=='title') {
                var li = $('<li><input class="select" type="checkbox"  name="' + key + '" id="select"/>' +
                           '<label for="' + key + '"></label></li>');
                          
                li.find('label').text(value);
                $('#append').append(li);
                }

                $.each(response[i], function(key, val){
                    if(key=='completed' && response[i].completed==true)
                    var co = $('<li><input class="complete" type="checkbox" checked disabled="disable"   name="' + key + '" id="complete"/>' +
                    '<label for="' + key + '"></label></li>');
                  //co.find('label').text(val);
                    $('.complete').prop("checked",true);
                   
               
                
                });
                // if((response[i].completed)=='true'){
                //     $('.select').prop("checked", true);  
                // }
            });

            

var promise=new Promise(function(resolve,reject){
    $(document).ready(function() {
        $('li').click(function() {
            var checkboxes = $('input:checkbox:checked').length;
             if(checkboxes>5){
              
                 $('.select').prop("checked", false);
            //     // $('#sucessMessage').css('display','none');
             }
            if(checkboxes==6){
                resolve("Congrats. 5 Tasks have been Successfully Completed");
                // $('#sucessMessage').html(result);
            } 
            else if(checkboxes>5){
                   reject("Error")
            }
            
        })
       
    });   
});
 promise
 .then(function(s){
     alert(s);

 })
 .catch(function(e){
     console.log(e);
 })
           
            }
            
        }
    }
   
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    }