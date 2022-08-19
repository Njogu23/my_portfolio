const nav = document.querySelectorAll('.nav');

function navMouseOver(){
   for(let i = 0; i < nav.length; i++){
   nav[i].addEventListener('mouseover', function(){
      nav[i].style.background = 'gold';
   });}
}
navMouseOver();

function navMouseLeave(){
   for(let i = 0; i < nav.length; i++)
   nav[i].addEventListener('mouseleave', function(){
      nav[i].style.background = 'none';
   })
}
navMouseLeave();



