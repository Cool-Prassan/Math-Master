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
     user_name = localStorage.getItem("user_name"); 
     room_name = localStorage.getItem("room_name");
     function sendmsg() {
           msg = document.getElementById("msg").value; 
           firebase.database().ref(room_name).push({
                 name: user_name,
                 message: msg,
                 like: 0
           }); 
           document.getElementById("msg").value=" "; 
     }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id); 
console.log(message_data); 
name = message_data['name']; 
message = message_data['message']; 
like = message_data['like'];
name_with_tag = "<h4>"+name+"</h4>"
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>"
like_with_tag = "<button class=' btn btn-primary' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>&nbsp;Like:"+like+"</span></button><hr>"
row = name_with_tag+message_with_tag+like_with_tag+span_with_tag; 
document.getElementById("output").innerHTML += row; 
//End code
      } });  }); }
getData();
function updateLike(message_id) {
      console.log("user clicked like button - " + message_id);
      button_id = message_id; 
      likes= document.getElementById(button_id).value; 
      updatedLikes = Number(likes) + 1; 
      console.log(updatedLikes);

      firebase.database().ref(room_name).child(message_id).update({
            like: updatedLikes
      });
}
function Logout() {
      localStorage.removeItem("room_name");
      window.location = "home.html"; 
}
var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function active() { 
    recognition.start(); 
}

recognition.onresult = function(event) {
    console.log(event); 

    var Content = event.results[0][0].transcript;
    console.log(Content); 

    document.getElementById("msg").value = Content; 
}

