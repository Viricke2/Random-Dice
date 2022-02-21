var randomNumber1=Math.floor(Math.random()*6)+1;

function getNum(){
  return randomNumber1;
}

console.log(randomNumber1);

function changeImg(){
  if (randomNumber1===1){
    document.getElementById('img1').src="images/dice1.png";
  }else if(randomNumber1===2){
    document.getElementById('img1').src="images/dice2.png";
  } else if(randomNumber1===3){
    document.getElementById('img1').src="images/dice3.png";
  } else if(randomNumber1===4){
    document.getElementById('img1').src="images/dice4.png";
  } else if(randomNumber1===5){
    document.getElementById('img1').src="images/dice5.png";
  } else {
    document.getElementById('img1').src="images/dice6.png";
  }
}

var randomNumber2=Math.floor(Math.random()*6)+1;

function getNum2(){
  return randomNumber2;
}

console.log(randomNumber2);

function changeImg2(){
  if (randomNumber2===1){
    document.getElementById('img2').src="images/dice1.png";
  }else if(randomNumber2===2){
    document.getElementById('img2').src="images/dice2.png";
  } else if(randomNumber2===3){
    document.getElementById('img2').src="images/dice3.png";
  } else if(randomNumber2===4){
    document.getElementById('img2').src="images/dice4.png";
  } else if(randomNumber2===5){
    document.getElementById('img2').src="images/dice5.png";
  } else {
    document.getElementById('img2').src="images/dice6.png";
  }
}

changeImg();
changeImg2();

function winner(){
  if(randomNumber1>randomNumber2){
    document.getElementById("title").textContent="🚩 Player One Won!";
  } else if (randomNumber1===randomNumber2) {
    document.getElementById("title").textContent="Refresh Me, it's a draw";
  } else{
    document.getElementById("title").textContent="Player Two Won! 🚩";
  }
}

winner();
