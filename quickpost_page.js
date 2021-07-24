 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCYVt6l8LCOIigcS9D7bux_0sjLqFWePok",
    authDomain: "covid-19-sose.firebaseapp.com",
    databaseURL: "https://covid-19-sose-default-rtdb.firebaseio.com",
    projectId: "covid-19-sose",
    storageBucket: "covid-19-sose.appspot.com",
    messagingSenderId: "489190724049",
    appId: "1:489190724049:web:b7946ae4598c60c86e90f0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
user_name = localStorage.getItem("user_name");

room_name = localStorage.getItem("room_name");

function send() {
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});

document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code

//End code
  } });  }); }
getData();

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "quickpost.html";
}