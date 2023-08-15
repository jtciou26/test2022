
(function(){
   var interval = setInterval(function(){
   var inputField = document.querySelector('input');
    if (inputField != null) {
      var mn = inputField.textContent = {{cjs - gets material name during creating classroom}};
      console.log (mn);
      inputField.value = mn;
      inputField.setAttribute("value", mn);

      clearInterval(interval);
    }
  },1000);
  
})();
 
