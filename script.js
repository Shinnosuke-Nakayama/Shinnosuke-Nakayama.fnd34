'use strict'
// 1行目に記載している 'use strict' は削除しないでください
const leftWindow = document.querySelector(".leftWindow");
const rightWindow = document.querySelector(".rightWindow");
const iframeUpper = document.querySelector(".upper");
const iframeLower = document.querySelector(".lower");
const btn = document.querySelectorAll(".btn");
const upperRight = document.querySelector(".upperRight");
const lowerRight = document.querySelector(".lowerRight");

function focus(event) {
  if (event.target.id === "zoomOne") {
    leftWindow.style.width = "100%";
    rightWindow.style.display = "none";

  } else if (event.target.id === "zoomTwo") {
      iframeLower.style.display = "none"
      WindowGetClikcZoomThree.style.visibility = "hidden";
      WindowGetClikcReturenThree.style.visibility = "hidden";
      iframeUpper.style.height = "100%";
      upperRight.style.height = "95%";

  } else if (event.target.id === "zoomThree") {
      iframeUpper.style.display = "none"
      WindowGetClikcZoomTwo.style.visibility = "hidden";
      WindowGetClikcReturnTwo.style.visibility = "hidden";
      iframeLower.style.height = "100%";
      lowerRight.style.height = "95%";
  }
}

function revert(event) {
  if (event.target.id === "returnOne") {
    leftWindow.style.width = "50%"
    rightWindow.style.width = "50%";
    rightWindow.style.display = "block"

  } else if (event.target.id === "returnTwo") {
      leftWindow.style.width = "50%"
      rightWindow.style.width = "50%";
      iframeUpper.style.height = "50%";
      leftWindow.style.display = "block"
      iframeLower.style.display = "block"
      WindowGetClikcZoomThree.style.visibility = "visible";
      WindowGetClikcReturenThree.style.visibility = "visible";
      upperRight.style.height = "85%"

  } else if (event.target.id === "returnThree") {
      leftWindow.style.width = "50%"
      rightWindow.style.width = "50%";
      iframeLower.style.height = "50%";
      leftWindow.style.display = "block"
      iframeUpper.style.display = "block"
      WindowGetClikcZoomTwo.style.visibility = "visible";
      WindowGetClikcReturnTwo.style.visibility = "visible";
      lowerRight.style.height = "90%";
  }
}

const WindowGetClikcZoomOne = document.querySelectorAll('input')[0];
const WindowGetClikcZoomTwo = document.querySelectorAll('input')[2];
const WindowGetClikcZoomThree = document.querySelectorAll('input')[4];

const WindowGetClikcReturnOne = document.querySelectorAll('input')[1];
const WindowGetClikcReturnTwo = document.querySelectorAll('input')[3];
const WindowGetClikcReturenThree = document.querySelectorAll('input')[5];

WindowGetClikcZoomOne.addEventListener("click",focus);
WindowGetClikcZoomTwo.addEventListener("click",focus);
WindowGetClikcZoomThree.addEventListener("click",focus);

WindowGetClikcReturnOne.addEventListener("click",revert);
WindowGetClikcReturnTwo.addEventListener("click",revert);
WindowGetClikcReturenThree.addEventListener("click",revert);
