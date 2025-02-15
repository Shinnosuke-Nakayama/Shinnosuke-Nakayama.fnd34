
'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const start = document.getElementById("start");
const standby = document.getElementById("standby");
const cars = document.getElementById("cars");
const carLineup = ["コンバイン", "トゥクトゥク", "ハイエース", "高所作業車", "消防車"];
const steps = ["steps(100,start)", "steps(50,start)", "steps(25,start)", "steps(10,start)", "steps(5,start)"];

function intRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function numOfRandomMaker(min, max) {
  const result = [];
  for(let i = min; i <= max; i++) {
    while(true) {
      let randomNum = intRandom(min, max);
      if(!result.includes(randomNum)) {
        result.push(randomNum);
        break;
      }
    }
  }
  return result;
}

standby.addEventListener("click", () => {
  const arrayOfRandomNum = numOfRandomMaker(0, carLineup.length - 1);
  for(const randomNum of arrayOfRandomNum) {
    cars.insertAdjacentHTML("beforeend", `<p><img class="image" src="https://raw.githubusercontent.com/Shinnosuke-Nakayama/Shinnosuke-Nakayama.fnd34/refs/heads/main/${carLineup[randomNum]}.png" alt="site-logo">${carLineup[randomNum]}</p>`);
  }
}
);

start.addEventListener("click", () => {
  let images = document.querySelectorAll(".image");
  const arrayOfRandomNum = numOfRandomMaker(1, images.length);
  images.forEach((image,index) => {
    image.animate(
      [
        { transform: "translateX(0)"}, 
        { transform: "translateX(600px)"}
      ], 
      {
        fill: "backwards", 
        duration: 4000 + (arrayOfRandomNum[index] * 500),
        easing:steps[arrayOfRandomNum[index] - 1]
      },
    );
  }
  );
}
);
