var check=0;
$('.tab').on('click', function(e) {            // getting the click function on tab anchor   
e.preventDefault();                               // to prevent action
var url = this.href;                                      // saving url            
$('#display').remove();                     //changing the div to insert anoother
check++;                      
$('#screen').load(url + ' #display').hide().fadeIn('slow'); ;       //adding div with animation
});
       function time() {                //time function
           var today = new Date();      //time object
           var h = today.getHours();        //hour
           var m = today.getMinutes();      //minutes
           var s = today.getSeconds();      //sec
           var z=today.getDay();
           var x=today.getMonth();
           var y=today.getFullYear();
           m = checkTime(m);        //to add zero when value is below 10
           s = checkTime(s);        //          ""
          
          
           if(check==0)         // used as a flag to identify tab opened 
           {
               document.getElementById("datet").innerHTML =z + "/" + x + "/" + y;       //date
               document.getElementById("fronttime").innerHTML =h + ":" + m + ":" + s;   //time
           }
           else
           {
               document.getElementById("timet").innerHTML =h + ":" + m + ":" + s;
           }
           var t = setTimeout(time, 500);
               }
       function checkTime(i) {      //to add zero when value is below 10 
       if (i < 10) {i = "0" + i}; 
       return i;
       }

var sec=0;
var min=0;
var hr=0;
var ml=0;
var disml=0; 
var dissec=0;
var dismin=0;
var dishr=0;
function stopwatch()        //to start stopwatch
{
    ml++;                   //incrementing milliseconds
    if(ml/60===1)           //checking milliseconds to set as zero if it is above 60
    {
     ml=0;
sec++;                      //incrementing  seconds
if(sec/60===1)
{
  sec=0;
  min++;
       if(min/60===1)
   {
       min=0;
       hr++;
   }
}
    }
    if(ml<10)
{
disml="0"+ml.toString();            //converting to string to display 
}
else
{
disml=ml;    
}
if(sec<10)
{
dissec="0"+sec.toString();
}
else
{
dissec=sec;    
}
if(min<10)
{
dismin="0"+min.toString();
}
else
{
dismin=min;    
}
if(hr<10)
{
dishr="0"+hr.toString();
}
else
{
dishr=hr;    
}
console.log(dishr+":"+dismin+":"+dissec);
document.getElementById("disp").innerHTML=dishr+":"+dismin+":"+dissec+":"+disml;
}
var id;
function start()
{
id= window.setInterval(stopwatch,15);
}
function stop()
{
window.clearInterval(id);
}
/*{
    function clear()
   var sec=0;
   var min=0;
   var hr=0;
   var ml=0;
   var dissec=0;
   var dismin=0;
   var dishr=0;
   var disml=0; 
    document.getElementById("disp").innerHTML=dishr+":"+dismin+":"+dissec;
    console.log(dishr+":"+dismin+":"+dissec+":"+disml);
}
*/function mdisplay(value)
{
    console.log(value);
    if(value.style.display==="none")
value.style.display="block";
else
value.style.display="none";
}

var musiq="";
var index=0;            // used as a index value for changing songs
var singer="";
var songname="";
var xhr = new XMLHttpRequest();         // to interact with server without reloading a page

function playorpause() //timer method
{
    var m= document.getElementById("plps");  //
    var n= document.getElementById("musiq");
    var o=document.getElementById("artist");
var s=document.getElementById("song");          

xhr.onload = function() {     //to load jason                  
    responseObject = JSON.parse(xhr.responseText);// to convert string to objects
    musiq=responseObject.songs[index].file;
    singer=responseObject.songs[index].singer;
     songname=responseObject.songs[index].name;

};

xhr.open('GET', 'data.json', true);       
xhr.send(null);

   
    if(m.className=="glyphicon glyphicon-play")     // checking class name
    {
        
        m.className="glyphicon glyphicon-pause";
        n.src=musiq;
        s.innerHTML=songname;
        o.innerHTML=singer;
        //console.log(songname);
        //console.log(singer);
        n.play();

      //  console.log(musiq);
        
    }
    else
    {
        m.className="glyphicon glyphicon-play"; // class name change
        n.pause(); 
    }
   
}
function nextsong()         //next fong function
{
    var n= document.getElementById("musiq");
    n.pause(); 
    index++;            // incrementing index value
    playorpause();      // calling function to play next song
}
function previoussong()     //previous song fuunction
{
    var n= document.getElementById("musiq");
    n.pause(); 
    index--;        // decrementing index
    playorpause();
}