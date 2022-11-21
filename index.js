function roll(){
  var num1 = Math.floor(Math.random() * 6) + 1;
  var num2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".player1").setAttribute("src", "images/dice" + num1 + ".png");
  document.querySelector(".player2").setAttribute("src", "images/dice" + num2 + ".png");

  if (num1 > num2){
    document.querySelector("h1").textContent = "Player1 wins!!!";

    setTimeout(function myH3A(){
      document.querySelectorAll("h3")[0].textContent = "🎈Player1!!!🎈";
      document.querySelectorAll("h3")[0].classList.add("transform");

    }, 100);

    setTimeout(function myH3R(){
      document.querySelectorAll("h3")[0].classList.remove("transform");
    }, 400);

    setTimeout(function myH3R(){
      document.querySelectorAll("h3")[0].textContent = "Player1";
    }, 1200);

    setTimeout(function myH1(){
      document.querySelector("h1").textContent = "Another Roll?";
    }, 1800);

  }
  else if (num2 > num1) {
    document.querySelector("h1").textContent = "Player2 wins!!!";
    setTimeout(function myH3A(){
      document.querySelectorAll("h3")[1].textContent = "🎈Player2!!!🎈";
      document.querySelectorAll("h3")[1].classList.add("transform");
    }, 100);


    const myTimeoutR = setTimeout(myH3R, 400);
    function myH3R(){
      document.querySelectorAll("h3")[1].classList.remove("transform");
    }

    setTimeout(function myH3R(){
      document.querySelectorAll("h3")[1].textContent = "Player2";
    }, 1200);

    setTimeout(function myH1(){
      document.querySelector("h1").textContent = "Another Roll?";
    }, 1800);

  }
  else{
    document.querySelector("h1").textContent = "Draw!";
  }

  document.querySelector("h1").classList.add("transition");
  for (var i = 0; i < document.querySelectorAll("h3").length; i++){
    document.querySelectorAll("h3")[i].classList.add("transition");
  }

  setTimeout(function myH1Color(){
    document.querySelector("h1").classList.remove("transition");
    for (var i = 0; i < document.querySelectorAll("h3").length; i++){
      document.querySelectorAll("h3")[i].classList.remove("transition");
    }
  }, 600);

  setTimeout(function myH1(){
    document.querySelector("h1").textContent = "Another Roll?";
  }, 1800);

}
