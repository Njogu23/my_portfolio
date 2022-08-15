const nav = document.querySelectorAll('.nav');

function navMouseOver(){
   nav.addEventListener('mouseover', function(){
      nav.style.background = 'gold';
   })
}
navMouseOver();

function navMouseLeave(){
   nav.addEventListener('mouseleave', function(){
      nav.style.background = 'none';
   })
}
navMouseLeave();


