var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var diceimg1 = "./dice"+randomNumber1+".png";
var diceimg2 = "./dice"+randomNumber2+".png";

var img1 = document.querySelectorAll("img")[0].setAttribute("src",diceimg1);
var img2 = document.querySelectorAll("img")[1].setAttribute("src",diceimg2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 Wins";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "It's a DRAW";
}