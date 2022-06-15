'use strict';
/*
document.querySelector('.message').textContent='🎉 Correct Number!';
document.querySelector('.number').textContent='17';
document.querySelector('.score').textContent='29';
document.querySelector('.guess').value=23;
*/
let twenty=20;
let newscore=20;
let high=0;
let highscore=0;
let number=Math.trunc(Math.random()*20)+1;
  document.querySelector('.score').textContent=`${twenty}`;
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
if(!guess){
    document.querySelector('.message').textContent='❌ No Number!';
    document.querySelector('.score').textContent=`${--twenty}`;
}
if(guess===number)
{
    document.querySelector('.message').textContent='🎉 Correct Number!';
    document.querySelector('.number').textContent=number;
    
     document.body.style.backgroundColor='#60b347';
     if(twenty>=high)
     {
        high=twenty;
     }
     
   document.querySelector('.highscore').textContent=`${high}`;
}
if(guess>number)
{
    document.querySelector('.message').textContent='Too high';
    document.querySelector('.score').textContent=`${--twenty}`;
}
if(guess<number)
{
    document.querySelector('.message').textContent='Too lower';
     document.querySelector('.score').textContent=`${--twenty}`;
}
if(twenty<=0)
{
    document.queryselector('.message').textContent='you lost the game!';
}

});
document.querySelector('.again').addEventListener('click',function(){
     number=Math.trunc(Math.random()*20)+1;
     twenty=20;
     document.querySelector('.guess').value = '';
     document.querySelector('.score').textContent=`${twenty}`;
     document.querySelector('.number').textContent='?';
   //document.querySelector('.number').textContent=number;
    document.body.style.backgroundColor='#222';
   document.querySelector('.message').textContent='start guessing..';
});