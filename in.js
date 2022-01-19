var fcr = document.getElementById('fcreat');
var lo =document.getElementById('log');
var cr =document.getElementById('creat');
var Mimg= document.getElementById('modleimg');
var nex =document.getElementById('but')
var imgs =document.querySelectorAll(".img1");

cr.addEventListener('click',function(){

    fcr.style.display="flex";
    
});
lo.addEventListener('click',function(){

    fcr.style.display="none";
    
});


var ind=0;
var sr;
    nex.addEventListener('click',function(){
        ind++;
        sr = imgs[ind];
        
        if(ind>=imgs.length-1){
            ind=0;
        }
        Mimg.src= sr.src;
        
        
    })






const con = function(){

const upper_d= new Date('Jan 25 2022 00:00:00').getTime();
const n_date =new Date().getTime();
const dif_date = upper_d-n_date;

const sec =1000;
const mint =sec * 60;
const hour= mint * 60;
const day = hour *24;


const re_day =Math.floor(dif_date /day);
const re_ho = Math.floor((dif_date % day)/hour);
const re_mint =Math.floor((dif_date % hour)/mint);
const re_sec =Math.floor((dif_date %mint)/sec);


var d =document.getElementById('day');
var h =document.getElementById('hours');
var m =document.getElementById('min');
var s =document.getElementById('sec');
 

d.innerHTML=re_day;
h.innerHTML=re_ho;
m.innerHTML=re_mint;
s.innerHTML=re_sec;
}
setInterval(con,1000);
