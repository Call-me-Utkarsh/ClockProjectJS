
function clock(){
    var hours=document.getElementById('hours');
    var minutes=document.getElementById('minutes');
    var seconds=document.getElementById("seconds");
    var am=document.getElementById("am");
    

    var time=new Date();
    var a=time.getHours();

    if(a>=12){
        var c=a;
        if(a==12){
            hours.innerHTML=c;
        }
        else{
            hours.innerHTML=c-12;
        }
        
        am.innerHTML="PM";
    }


    else if(a<12){
        hours.innerHTML=a;
        am.innerHTML="AM";

    }



    var b=time.getMinutes();
    var c=time.getSeconds();

    minutes.innerHTML=b;
    seconds.innerHTML=c;
}

setInterval(clock,1000);

var wk=0;
var lc=0;
var np=0;

var i=0;
var j=0;
var k=0;
var b=0;

function Make(){
    if((b==1) && (i!=0 || j!=0 || k!=0)){
        
        
        if(i!=0){
           
            var q=document.getElementById("wakeUpTimeSelector");
            var r=q.options[q.selectedIndex].text;
            console.log(r);
            document.getElementById("div1").innerHTML=`Wake up time : ${r}`;
           
        }
        if(i==0){
            document.getElementById("div1").innerHTML="";
        }

        if(j!=0){
            var s=document.getElementById("lunchTimeSelector");
            var t=s.options[s.selectedIndex].text;
    
            document.getElementById("div2").innerHTML=`Lunch time : ${t}`;
            console.log("po");

            
        }
        if(j==0){
            document.getElementById("div2").innerHTML="";
        }
        if(k!=0){
          
            var u=document.getElementById("napTimeSelector");
            var v=u.options[u.selectedIndex].text;
            document.getElementById('div3').innerHTML=`Naptime : ${v}`;
            console.log("pp");
            
        }
        if(k==0){
            document.getElementById("div3").innerHTML="";
        }
    
    }
    if((b==1) && (i==0 && j==0 && k==0)){
      
        document.getElementById('good-afternoon').remove();
        b=0;
    }

    if((b==0) && (i!=0 || j!=0 || k!=0)){
       
        var container=document.createElement('div');
        container.className="grid-item";
        container.id="good-afternoon";
        document.getElementById('grid-container1').appendChild(container);

        var divinsidecontainer1=document.createElement('div');
        divinsidecontainer1.id="div1";
        document.getElementById('good-afternoon').appendChild(divinsidecontainer1);
       
        var divinsidecontainer2=document.createElement('div');
        divinsidecontainer2.id="div2";
        document.getElementById('good-afternoon').appendChild(divinsidecontainer2);

        var divinsidecontainer3=document.createElement('div');
        divinsidecontainer3.id="div3";
        document.getElementById('good-afternoon').appendChild(divinsidecontainer3);

        if(i!=0){
       
            
            var wakecontainer=document.getElementById("wakeUpTimeSelector");
            var value1=wakecontainer.options[wakecontainer.selectedIndex].text;
            divinsidecontainer1.innerHTML=`Wake up time : ${value1}`;
            
    
        }
        if(j!=0){
       
           
            var lunchcontainer=document.getElementById("lunchTimeSelector");
            var value2=lunchcontainer.options[lunchcontainer.selectedIndex].text;
            divinsidecontainer2.innerHTML=`Lunch  time : ${value2}`;
               
        }
        if(k!=0){
     
            
            var napcontainer=document.getElementById("napTimeSelector");
            var value3=napcontainer.options[napcontainer.selectedIndex].text;
            divinsidecontainer3.innerHTML=`Dinner  time : ${value3}`;
          
            
        }
      b=1;

    
    }
    
    return;
}


function settime(){

  
  
    i= document.getElementById('wakeUpTimeSelector').value;
    j= document.getElementById('lunchTimeSelector').value;
    k= document.getElementById('napTimeSelector').value;
    var hourr =new Date().getHours();
    var flag=0;
    if (i==hourr){
        document.getElementById('lunchbottom').style.backgroundImage="url(./assests/breakfast.PNG)";
        document.getElementById("lunch").innerHTML="LET'S Have Some Breakfast !!";
        wk=1;
    }
    else{
        document.getElementById('lunchbottom').style.backgroundImage="url(./assests/ballon.PNG)";
        document.getElementById("lunch").innerHTML="";
        wk=0;
    }

    if(j==hourr){
        document.getElementById('lunchbottom').style.backgroundImage="url(./assests/lunch.png)";
        document.getElementById("lunch").innerHTML="LET'S Have Some Lunch !!";
        lc=1;
    }
    else if(wk==0){
        document.getElementById('lunchbottom').style.backgroundImage="url(./assests/ballon.PNG)";
        document.getElementById("lunch").innerHTML="";
        lc=0;
    }

    if(k==hourr){
        document.getElementById('lunchbottom').style.backgroundImage="url(./assests/dinner.PNG)";
        document.getElementById("lunch").innerHTML="LET'S Have Some Dinner!!";
        np=1;
    }
    else if(wk==0 && lc==0){
        document.getElementById('lunchbottom').style.backgroundImage="url(./assests/ballon.PNG)";
        document.getElementById("lunch").innerHTML="";
        np=0;
    }

    Make();
   
    


}




function clock1(){
    

  

    var hour =new Date().getHours();
    var minute=new Date().getMinutes();
    var second=new Date().getSeconds();
  
    if((hour>=0 )&& (minute==00) && (second==00)){
    
        if(hour==i){
            document.getElementById('lunchbottom').style.backgroundImage="url(./assests/breakfast.PNG)";
            document.getElementById("lunch").innerHTML="LET'S Have Some Breakfast !!";
          
        }
        if(hour==j){
            
            
            document.getElementById('lunchbottom').style.backgroundImage="url(./assests/lunch.png)";
            document.getElementById("lunch").innerHTML="LET'S Have Some Lunch !!";
         
        }
        if(hour==k){
            document.getElementById('lunchbottom').style.backgroundImage="url(./assests/dinner.PNG)";
            document.getElementById("lunch").innerHTML="LET'S Have Some Dinner!!";
          
        }
    }
  
   
}

setInterval(clock1,1000);








