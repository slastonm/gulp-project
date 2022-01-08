window.onload = function(){
  const wrapperElements = document.querySelectorAll( ".wrapper" );
  let offSetLeftPosition = wrapperElements[0].offsetLeft
  let value = `${offSetLeftPosition+100}px`;
  document.documentElement.style.setProperty(
    '--size', value
  );

  let serarchButton = document.querySelectorAll('.search');
  console.log(serarchButton);
  let searchInput = document.querySelectorAll('.search-input');
  let overlayElement = document.getElementsByClassName('overlay');  
  serarchButton[0].addEventListener("click", function(e){
    if(searchInput[0].className === "search-input hide"){
      searchInput[0].classList.remove("hide");
      overlayElement[0].classList.remove("hide");
    }
  });

  overlayElement[0].addEventListener('click', function(e){
    searchInput[0].classList.add("hide");
    overlayElement[0].classList.add("hide");
  })
};