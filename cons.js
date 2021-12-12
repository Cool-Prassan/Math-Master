var myVar=""; 
function myFunction() {
  alert("Timer started"); 
   myVar = setTimeout(alertFunc, 1500000);
  }
  
  function alertFunc() {
    alert("Timer finished");
  }

  function myStopFunction() {
    clearTimeout(myVar);
    alert("Timer stopped")
  }

function log() {
    clearTimeout(myVar); 
    window.location = "home.html"; 
}