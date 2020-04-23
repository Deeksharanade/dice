
var n1=Math.random();
var n2=Math.random();
n1=n1*5;
n2=n2*5;
n1=Math.floor(n1)+1;
n2=Math.floor(n2)+1;
if(n1==1){
  document.querySelector(".img1").setAttribute("src","dice1.png");
}
else if(n1==2){
  document.querySelector(".img1").setAttribute("src","dice2.png");
}
else if(n1==3){
  document.querySelector(".img1").setAttribute("src","dice3.png");
}
else if(n1==4){
  document.querySelector(".img1").setAttribute("src","dice4.png");
}
else if(n1==5){
  document.querySelector(".img1").setAttribute("src","dice5.png");
}
else{

  document.querySelector(".img1").setAttribute("src","dice6.png");
  }


if(n2==1){
    document.querySelector(".img2").setAttribute("src","dice1.png");
}
else if(n2==2){
    document.querySelector(".img2").setAttribute("src","dice2.png");
}
else if(n2==3){
    document.querySelector(".img2").setAttribute("src","dice3.png");
}
else if(n2==4){
    document.querySelector(".img2").setAttribute("src","dice4.png");
}
else if(n2==5){
    document.querySelector(".img2").setAttribute("src","dice5.png");
}
else {
    document.querySelector(".img2").setAttribute("src","dice6.png");
}

 if(n1>n2){
   document.querySelector("h1").textContent="Player 1 win";
 }
else if(n1<n2){
  document.querySelector("h1").textContent="player 2 win";
}
else{
  document.querySelector("h1").textContent="Draw";
}
