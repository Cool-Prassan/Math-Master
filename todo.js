var firebaseConfig = {
      apiKey: "AIzaSyCiLUP132DgsRnnkaD0FKSMlaSlIToWoRc",
      authDomain: "barry-gaks.firebaseapp.com",
      databaseURL: "https://barry-gaks-default-rtdb.firebaseio.com",
      projectId: "barry-gaks",
      storageBucket: "barry-gaks.appspot.com",
      messagingSenderId: "153953717451",
      appId: "1:153953717451:web:38a6878a5696e08850df4e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
     function addRoom() {
     room_name = document.getElementById("addroom_input").value;
     firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name"
     }); 
     localStorage.setItem("room_name", room_name); 
     window.location = "to_do.html"; 
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div id='+Room_names+' class='room_name' onclick='redirectToRoomNames(this.id)'>" + Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row; 
      console.log("Room names - " + Room_names)
      //End code
      });});}
getData();

function redirectToRoomNames(name) {
      console.log(name);
      localStorage.setItem("room_name",name); 
      window.location="to_do.html"; 
}
function log() {
      localStorage.removeItem("room_name")
      window.location = "home.html"; 
}