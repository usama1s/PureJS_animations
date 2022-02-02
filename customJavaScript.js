// var imgsAnimationsMain = document.getElementsByClassName("img-animations-main")[0];
// var imgsAnimations = document.querySelectorAll(".img-animations img");
// var noOfImages = imgsAnimations.length;
// document.getElementsByClassName('img-animations-main')[0].style.height =  noOfImages*20+"vh";
//
// window.onscroll = function (e) {
//   var topPos = imgsAnimationsMain.offsetTop - window.innerHeight;
//   var bottomPos = imgsAnimationsMain.offsetHeight + topPos + window.innerHeight;
//   var avgImgHeight = (bottomPos  - topPos - (2*window.innerHeight)) / noOfImages; //100vh
//
// var imgNo = Math.floor((window.scrollY - window.innerHeight - topPos)/ avgImgHeight) ;
//
// hideAllImages();
//       if (imgNo<0){
//         imgsAnimations[0].style.opacity = 1;
//       }else if ((imgNo>=0) && (imgNo<noOfImages)){
//         imgsAnimations[imgNo].style.opacity = 1;
//       }else if(imgNo>=noOfImages){
//         imgsAnimations[noOfImages-1].style.opacity = 1;
//       }
//
// };
// function hideAllImages(){
//  for (let i = 0; i < imgsAnimations.length; i++){
//     imgsAnimations[i].style.opacity = 0;
//   }
// }



var imgsAnimationsM = document.getElementsByClassName("img-animations-main");



  window.onscroll = function (e) {
    for (let j=0; j < imgsAnimationsM.length; j++){

      var imgsAnimationsMain = imgsAnimationsM[j];
      var imgsAnimations = imgsAnimationsMain.querySelectorAll("img");
      var noOfImages = imgsAnimations.length;
      imgsAnimationsMain.style.height =  noOfImages*20+"vh";
    var topPos = imgsAnimationsMain.offsetTop - window.innerHeight;
    var bottomPos = imgsAnimationsMain.offsetHeight + topPos + window.innerHeight;
    var avgImgHeight = (bottomPos  - topPos - (2*window.innerHeight)) / noOfImages; //100vh

  var imgNo = Math.floor((window.scrollY - window.innerHeight - topPos)/ avgImgHeight) ;

  hideAllImages(imgsAnimations);
    if (imgNo<0){
      imgsAnimations[0].style.opacity = 1;
    }else if ((imgNo>=0) && (imgNo<noOfImages)){
      imgsAnimations[imgNo].style.opacity = 1;
    }else if(imgNo>=noOfImages){
      imgsAnimations[noOfImages-1].style.opacity = 1;
    }
}
  };


function hideAllImages(imgsAnimations1){
 for (let i = 0; i < imgsAnimations1.length; i++){
    imgsAnimations1[i].style.opacity = 0;
  }
}
