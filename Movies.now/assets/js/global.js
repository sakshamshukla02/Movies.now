'use strict';



/**
 * Add event to multiple elements
 */

const addEventOnElements = function (elements,eventType,callbacks){
    for(const elem of elements ) elem.addEventListener(eventType,callbacks);
}

/**
 * Toggle search box in mobile device || small screen
 */

 const searchBox=document.querySelector("[search-box]");
 const searchTogglers=document.querySelectorAll("[search-toggler]");

 addEventOnElements(searchTogglers,"click",function(){
    searchBox.classList.toggle("active");
 })



 /**
  * store movieId in local Storage 
  * when you click any movie card
  */

 const getMovieDetail = function(movieId){
    window.localStorage.setItem("movieId", String(movieId));
 }


 const getMovieList=function(urlParam,genreName){
   window.localStorage.setItem("urlParam",urlParam);
   window.localStorage.setItem("genreName",genreName);
 }

