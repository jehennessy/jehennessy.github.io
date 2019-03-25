 /*
============================================
; Title:  script.js
; Author: Jordan Hennessy
; Date:   24 March 2019
; Description: Opens and closes the projects
;===========================================
*/


 // start project 1
function openProject1() {
  var bioSite = document.getElementById('project-1');
  var web230 = document.getElementById('project-2');
  var portfolio = document.getElementById('project-3');
  var web330 = document.getElementById('project-4');
  var image = document.getElementById('project-1-image');
  var text = document.getElementById('project-1-text');
  var h4 = document.getElementById('project-1-h4');
  var colors = document.getElementById('project-1-color');
  var button = document.getElementById('button-container');
  var close = document.getElementById('close-pro-1');


  document.getElementById('portfolio-container').style.width = "80%";
  document.getElementById('work-title-container').style.width= "20%";
  document.getElementById('work-title').style.fontSize="58px";
  document.getElementById('project-1-container').style.padding = "0";


  web230.style.display = "none";
  portfolio.style.display = "none";
  web330.style.display = "none";


  image.style.display = "block";
  text.style.display = "block";
  h4.style.display = "block";
  colors.style.display = "block";
  button.style.display = "block";
  close.style.visibility = "visible";



  bioSite.style.height = "1300px";
  bioSite.style.backgroundImage = "linear-gradient(0deg,rgba(175, 170, 170, 1),rgba(175, 170, 170, 1))";
};


function closeProject1() {
  var bioSite = document.getElementById('project-1');
  var web230 = document.getElementById('project-2');
  var portfolio = document.getElementById('project-3');
  var web330 = document.getElementById('project-4');
  var image = document.getElementById('project-1-image');
  var text = document.getElementById('project-1-text');
  var h4 = document.getElementById('project-1-h4');
  var colors = document.getElementById('project-1-color');
  var button = document.getElementById('button-container');
  var close = document.getElementById('close-pro-1');


  document.getElementById('portfolio-container').style.width = "60%";
  document.getElementById('work-title-container').style.width= "40%";
  document.getElementById('work-title').style.fontSize="100px";
  document.getElementById('project-1-container').style.padding = "25%";


  web230.style.display = "block";
  portfolio.style.display = "block";
  web330.style.display = "block";


  image.style.display = "none";
  text.style.display = "none";
  h4.style.display = "none";
  colors.style.display = "none";
  button.style.display = "none";
  close.style.visibility = "hidden";


  bioSite.style.height = "500px";
  bioSite.style.backgroundImage = "linear-gradient(0deg,rgba(175, 170, 170, 0.76),rgba(175, 170, 170, 0.76)), url(images/RickOnBike.jpg)";
};


// start project 2
function openProject2() {
  var bioSite = document.getElementById('project-1');
  var web230 = document.getElementById('project-2');
  var portfolio = document.getElementById('project-3');
  var web330 = document.getElementById('project-4');
  var image = document.getElementById('project-2-image');
  var text = document.getElementById('project-2-text');
  var button = document.getElementById('project-2-button');
  var close = document.getElementById('close-pro-2');


  document.getElementById('portfolio-container').style.width = "80%";
  document.getElementById('work-title-container').style.width= "20%";
  document.getElementById('work-title').style.fontSize="58px";
  document.getElementById('project-2-container').style.padding = "0";


  bioSite.style.display = "none";
  portfolio.style.display = "none";
  web330.style.display = "none";


  image.style.display = "block";
  text.style.display = "block";
  button.style.display = "block";
  close.style.visibility = "visible";


  web230.style.height = "1300px";
  web230.style.backgroundImage = "linear-gradient(0deg,rgba(175, 170, 170, 1),rgba(175, 170, 170, 1))";
};


function closeProject2() {
  var bioSite = document.getElementById('project-1');
  var web230 = document.getElementById('project-2');
  var portfolio = document.getElementById('project-3');
  var web330 = document.getElementById('project-4');
  var image = document.getElementById('project-2-image');
  var text = document.getElementById('project-2-text');
  var button = document.getElementById('project-2-button');
  var close = document.getElementById('close-pro-2');

  document.getElementById('portfolio-container').style.width = "60%";
  document.getElementById('work-title-container').style.width= "40%";
  document.getElementById('work-title').style.fontSize="100px";
  document.getElementById('project-2-container').style.padding = "25%";


  bioSite.style.display = "block";
  portfolio.style.display = "block";
  web330.style.display = "block";


  image.style.display = "none";
  text.style.display = "none";
  button.style.display = "none";
  close.style.visibility = "hidden";


  web230.style.height = "500px";
  web230.style.backgroundImage = "linear-gradient(0deg,rgba(175, 170, 170, 0.76),rgba(175, 170, 170, 0.76)), url(images/web-231.png)";
};


// start project 3
function openProject3() {
  var bioSite = document.getElementById('project-1');
  var web230 = document.getElementById('project-2');
  var portfolio = document.getElementById('project-3');
  var web330 = document.getElementById('project-4');
  var image = document.getElementById('project-3-image');
  var text = document.getElementById('project-3-text');
  var h4 = document.getElementById('project-3-h4');
  var colors = document.getElementById('project-3-color');
  var button = document.getElementById('project-3-button');
  var close = document.getElementById('close-pro-3');


  document.getElementById('portfolio-container').style.width = "80%";
  document.getElementById('work-title-container').style.width= "20%";
  document.getElementById('work-title').style.fontSize="58px";
  document.getElementById('project-3-container').style.padding = "0";


  web230.style.display = "none";
  bioSite.style.display = "none";
  web330.style.display = "none";


  image.style.display = "block";
  text.style.display = "block";
  h4.style.display = "block";
  colors.style.display = "block";
  button.style.display = "block";
  close.style.visibility = "visible";


  portfolio.style.height = "1300px";
  portfolio.style.backgroundImage = "linear-gradient(0deg,rgba(175, 170, 170, 1),rgba(175, 170, 170, 1))";
};


function closeProject3() {
  var bioSite = document.getElementById('project-1');
  var web230 = document.getElementById('project-2');
  var portfolio = document.getElementById('project-3');
  var web330 = document.getElementById('project-4');
  var image = document.getElementById('project-3-image');
  var text = document.getElementById('project-3-text');
  var h4 = document.getElementById('project-3-h4');
  var colors = document.getElementById('project-3-color');
  var button = document.getElementById('project-3-button');
  var close = document.getElementById('close-pro-3');


  document.getElementById('portfolio-container').style.width = "60%";
  document.getElementById('work-title-container').style.width= "40%";
  document.getElementById('work-title').style.fontSize="100px";
  document.getElementById('project-3-container').style.padding = "25%";


  web230.style.display = "block";
  bioSite.style.display = "block";
  web330.style.display = "block";


  image.style.display = "none";
  text.style.display = "none";
  h4.style.display = "none";
  colors.style.display = "none";
  button.style.display = "none";
  close.style.visibility = "hidden";


  portfolio.style.height = "500px";
  portfolio.style.backgroundImage = "linear-gradient(0deg,rgba(175, 170, 170, 0.76),rgba(175, 170, 170, 0.76)), url(images/CloudsAfterStorm.jpg)";
};


// start project 4
function openProject4() {
  var bioSite = document.getElementById('project-1');
  var web230 = document.getElementById('project-2');
  var portfolio = document.getElementById('project-3');
  var web330 = document.getElementById('project-4');
  var image = document.getElementById('project-4-image');
  var text = document.getElementById('project-4-text');
  var button = document.getElementById('project-4-button');
  var close = document.getElementById('close-pro-4');


  document.getElementById('portfolio-container').style.width = "80%";
  document.getElementById('work-title-container').style.width= "20%";
  document.getElementById('work-title').style.fontSize="58px";
  document.getElementById('project-4-container').style.padding = "0";


  bioSite.style.display = "none";
  portfolio.style.display = "none";
  web230.style.display = "none";


  image.style.display = "block";
  text.style.display = "block";
  button.style.display = "block";
  close.style.visibility = "visible";


  web330.style.height = "1300px";
  web330.style.backgroundImage = "linear-gradient(0deg,rgba(175, 170, 170, 1),rgba(175, 170, 170, 1))";
};

function closeProject4() {
  var bioSite = document.getElementById('project-1');
  var web230 = document.getElementById('project-2');
  var portfolio = document.getElementById('project-3');
  var web330 = document.getElementById('project-4');
  var image = document.getElementById('project-4-image');
  var text = document.getElementById('project-4-text');
  var button = document.getElementById('project-4-button');
  var close = document.getElementById('close-pro-4');


  document.getElementById('portfolio-container').style.width = "60%";
  document.getElementById('work-title-container').style.width= "40%";
  document.getElementById('work-title').style.fontSize="100px";
  document.getElementById('project-4-container').style.padding = "25%";


  bioSite.style.display = "block";
  portfolio.style.display = "block";
  web230.style.display = "block";

  image.style.display = "none";
  text.style.display = "none";
  button.style.display = "none";
  close.style.visibility = "hidden";


  web330.style.height = "500px";
  web330.style.backgroundImage = "linear-gradient(0deg,rgba(175, 170, 170, 0.76),rgba(175, 170, 170, 0.76)), url(images/web-330.png)";
};

