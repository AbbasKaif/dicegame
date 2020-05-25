var arr=['dice1.png','dice2.png','dice3.png','dice4.png','dice5.png','dice6.png'];
var i=Math.floor(Math.random()*arr.length);
var j=Math.floor(Math.random()*arr.length);
var m=i+" "+j;
document.querySelector('.img1').setAttribute('src',"images/"+arr[i]);
document.querySelector('.img2').setAttribute('src',"images/"+arr[j]);

if (i > j) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (j > i) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "It is a Draw!";
}
