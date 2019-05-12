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
  var jsQuiz = document.getElementById('project-5');
  var image = document.getElementById('project-1-image');
  var text = document.getElementById('project-1-text');
  var h4 = document.getElementById('project-1-h4');
  var colors = document.getElementById('project-1-color');
  var button = document.getElementById('button-container-1');
  var close = document.getElementById('close-pro-1');


  document.getElementById('portfolio-container').style.width = "80%";
  document.getElementById('work-title-container').style.width= "20%";
  document.getElementById('work-title').style.fontSize="58px";
  document.getElementById('project-1-container').style.padding = "0";


  web230.style.display = "none";
  portfolio.style.display = "none";
  web330.style.display = "none";
  jsQuiz.style.display ="none";


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
  var jsQuiz = document.getElementById('project-5');
  var image = document.getElementById('project-1-image');
  var text = document.getElementById('project-1-text');
  var h4 = document.getElementById('project-1-h4');
  var colors = document.getElementById('project-1-color');
  var button = document.getElementById('button-container-1');
  var close = document.getElementById('close-pro-1');


  document.getElementById('portfolio-container').style.width = "60%";
  document.getElementById('work-title-container').style.width= "40%";
  document.getElementById('work-title').style.fontSize="100px";
  document.getElementById('project-1-container').style.padding = "25%";


  web230.style.display = "block";
  portfolio.style.display = "block";
  web330.style.display = "block";
  jsQuiz.style.display ="block";


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
  var jsQuiz = document.getElementById('project-5');
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
  jsQuiz.style.display ="none";


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
  var jsQuiz = document.getElementById('project-5');
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
  jsQuiz.style.display ="block";


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
  var jsQuiz = document.getElementById('project-5');
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
  jsQuiz.style.display ="none";


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
  var jsQuiz = document.getElementById('project-5');
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
  jsQuiz.style.display ="block";


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
  var jsQuiz = document.getElementById('project-5');
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
  jsQuiz.style.display ="none";


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
  var jsQuiz = document.getElementById('project-5');
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
  jsQuiz.style.display ="block";

  image.style.display = "none";
  text.style.display = "none";
  button.style.display = "none";
  close.style.visibility = "hidden";


  web330.style.height = "500px";
  web330.style.backgroundImage = "linear-gradient(0deg,rgba(175, 170, 170, 0.76),rgba(175, 170, 170, 0.76)), url(images/web-330.png)";
};


// start project 5
function openProject5() {
  var bioSite = document.getElementById('project-1');
  var web230 = document.getElementById('project-2');
  var portfolio = document.getElementById('project-3');
  var web330 = document.getElementById('project-4');
  var jsQuiz = document.getElementById('project-5');
  var image = document.getElementById('project-5-image');
  var text = document.getElementById('project-5-text');
  var button = document.getElementById('button-container-5');
  var close = document.getElementById('close-pro-5');


  document.getElementById('portfolio-container').style.width = "80%";
  document.getElementById('work-title-container').style.width= "20%";
  document.getElementById('work-title').style.fontSize="58px";
  document.getElementById('project-5-container').style.padding = "0";


  bioSite.style.display = "none";
  portfolio.style.display = "none";
  web230.style.display = "none";
  web330.style.display ="none";


  image.style.display = "block";
  text.style.display = "block";
  button.style.display = "block";
  close.style.visibility = "visible";


  jsQuiz.style.height = "1300px";
  jsQuiz.style.backgroundImage = "linear-gradient(0deg,rgba(175, 170, 170, 1),rgba(175, 170, 170, 1))";
};

function closeProject5() {
  var bioSite = document.getElementById('project-1');
  var web230 = document.getElementById('project-2');
  var portfolio = document.getElementById('project-3');
  var web330 = document.getElementById('project-4');
  var jsQuiz = document.getElementById('project-5');
  var image = document.getElementById('project-5-image');
  var text = document.getElementById('project-5-text');
  var button = document.getElementById('button-container-5');
  var close = document.getElementById('close-pro-5');


  document.getElementById('portfolio-container').style.width = "60%";
  document.getElementById('work-title-container').style.width= "40%";
  document.getElementById('work-title').style.fontSize="100px";
  document.getElementById('project-5-container').style.padding = "25%";


  bioSite.style.display = "block";
  portfolio.style.display = "block";
  web230.style.display = "block";
  web330.style.display ="block";

  image.style.display = "none";
  text.style.display = "none";
  button.style.display = "none";
  close.style.visibility = "hidden";


  jsQuiz.style.height = "500px";
  jsQuiz.style.backgroundImage = "linear-gradient(0deg,rgba(175, 170, 170, 0.76),rgba(175, 170, 170, 0.76)), url(images/web-330.png)";
};

// Gallery
function openModal1() {
  document.getElementById('galleryModal').style.display = "block";
  document.getElementById('openImage1').style.display = "block";
  document.getElementById('modalClose').style.visibility = "visible";
  var img = document.getElementById('img1');
  document.getElementById('caption1').innerHTML = img.alt;
}

function openModal2() {
  document.getElementById('galleryModal').style.display = "block";
  document.getElementById('openImage2').style.display = "block";
  document.getElementById('modalClose').style.visibility = "visible";
  var img = document.getElementById('img2');
  document.getElementById('caption2').innerHTML = img.alt;
}

function openModal3() {
  document.getElementById('galleryModal').style.display = "block";
  document.getElementById('openImage3').style.display = "block";
  document.getElementById('modalClose').style.visibility = "visible";
  var img = document.getElementById('img3');
  document.getElementById('caption3').innerHTML = img.alt;
}

function openModal4() {
  document.getElementById('galleryModal').style.display = "block";
  document.getElementById('openImage4').style.display = "block";
  document.getElementById('modalClose').style.visibility = "visible";
  var img = document.getElementById('img4');
  document.getElementById('caption4').innerHTML = img.alt;
}

function openModal5() {
  document.getElementById('galleryModal').style.display = "block";
  document.getElementById('openImage5').style.display = "block";
  document.getElementById('modalClose').style.visibility = "visible";
  var img = document.getElementById('img5');
  document.getElementById('caption5').innerHTML = img.alt;
}

function openModal6() {
  document.getElementById('galleryModal').style.display = "block";
  document.getElementById('openImage6').style.display = "block";
  document.getElementById('modalClose').style.visibility = "visible";
  var img = document.getElementById('img6');
  document.getElementById('caption6').innerHTML = img.alt;
}


function closeModal() {
  document.getElementById('galleryModal').style.display = "none";
  document.getElementById('openImage1').style.display = "none";
  document.getElementById('openImage2').style.display = "none";
  document.getElementById('openImage3').style.display = "none";
  document.getElementById('openImage4').style.display = "none";
  document.getElementById('openImage5').style.display = "none";
  document.getElementById('openImage6').style.display = "none";
}

