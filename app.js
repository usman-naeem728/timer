var a = document.getElementById("Hours");
var b = document.getElementById("Mins");
var c = document.getElementById("Sec");

var hours = document.getElementById("hours");
var mins = document.getElementById("min");
var seco = document.getElementById("sec");
var interval;





function seting() {
    if(a.value == "" || b.value == "" || c.value == ""){
        alert("Invalid time")
    }else if(a.value == 0 && b.value == 0 && c.value == 0){
      alert("timer up")
    }else{
     hours.innerHTML = a.value;
     mins.innerHTML =  b.value ;
     seco.innerHTML = c.value;
     document.getElementById('inp').className='hed';
     document.getElementById('time').className='timer'
    }
}


function time() {
    c.value--
    seco.innerHTML = c.value;

    if (c.value == 0) {
        b.value--;
        mins.innerHTML = b.value;
        c.value = 60;
    } else if (b.value == 0) {
        a.value--
        hours.innerHTML = a.value
        b.value = 60;
    }

}




function start() {
    interval = setInterval(time, 1000)
    document.getElementById('strtbtn').style.display='none';
    document.getElementById('btn').style.marginLeft='80px'
}




function pause(){
    clearInterval(interval);
    document.getElementById('strtbtn').style.display='';
    document.getElementById('btn').style.marginLeft=''
    
}

function reset(){
 pause()      
 hours.innerHTML = 0
 mins.innerHTML =  0
 seco.innerHTML = 0
document.getElementById('inp').className='timing';
document.getElementById("time").className='hed'
 a.value = ''
 b.value = ''
 c.value = ''
}