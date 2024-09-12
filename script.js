const images = document.querySelectorAll(".image");
const result = document.querySelector(".result");
const myScore = document.querySelector(".myScore");
const comScore = document.querySelector(".comScore");
const YourScoremsg = document.querySelector(".Yourscoremsg");
const Commsg = document.querySelector(".ComScoremsg");
// result.classList.remove("Yourscoremsg");
let flag = 0;
let score = 0;
const game = (imagename) => {
  const choice = ["rock", "paper", "scissor"];
  const random = Math.floor(Math.random() * 3);
  const comChioce = choice[random];
  console.log(imagename);
  console.log(comChioce);

  if (imagename === "rock" && comChioce === "scissor") {
    console.log("You win");
    flag = 1;
  } else if (imagename === "rock" && comChioce === "paper") {
    console.log("Computer win");
    flag = 2;
  } else if (imagename === "scissor" && comChioce === "paper") {
    console.log("You win");
    flag = 1;
  } else if (imagename === "scissor" && comChioce === "rock") {
    console.log("Computer win");
    flag = 2;
  } else if (imagename === "paper" && comChioce === "scissor") {
    console.log("Computer win");
    flag = 2;
  } else if (imagename === "paper" && comChioce === "rock") {
    console.log("Computer win");
    flag = 1;
  } else {
    console.log("Draw");
    flag = 0;
  }
  if (flag == 1) {
    score++;
    myScore.innerText = score;
    result.innerText = `You Win! Your ${imagename} beats Computer ${comChioce}`;
    result.style.backgroundColor = "Green";
    result.style.display = "inline";
    result.style.padding = "1.5vmin";
    result.style.border = "none";
  } else if (flag == 2) {
    score++;
    comScore.innerText = score;
    result.innerText = `You Lose! Computer ${comChioce} beats Your ${imagename}`;
    result.style.backgroundColor = "red";
    result.style.display = "inline";
    result.style.padding = "1.5vmin";
    result.style.border = "none";
  } else {
    result.innerText = "Oops, Draw..";
    result.style.backgroundColor = "Grey";
    result.style.display = "inline";
    result.style.padding = "1.5vmin";
    result.style.border = "none";
  }
};

images.forEach((image) => {
  image.addEventListener("click", () => {
    const imagename = image.getAttribute("id");

    game(imagename);
  });
});
