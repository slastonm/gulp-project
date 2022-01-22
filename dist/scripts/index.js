window.onload = function(){
  const wrapperElements = document.querySelectorAll( ".wrapper" );
  let offSetLeftPosition = wrapperElements[0].offsetLeft
  let value = `${offSetLeftPosition+100}px`;
  document.documentElement.style.setProperty(
    '--size', value
  );

  let serarchButton = document.querySelectorAll('.search');

  let closeBtn = document.querySelectorAll('.close');
  let overlayElement = document.getElementsByClassName('overlay');  
  function hideOverlay(){
    overlayElement[0].classList.add("hide");    
  }
  serarchButton[0].addEventListener("click", function(e){
    if(overlayElement[0].className === "overlay hide"){
      overlayElement[0].classList.remove("hide");
    }
  });

  overlayElement[0].addEventListener('click', function(e){
    if(e.target.className === "overlay"){
      hideOverlay();
    }
  });
  closeBtn[0].addEventListener('click', function(){
    hideOverlay();
  });
};