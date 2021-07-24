
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

//FUNCTION GET DATA
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
  document.getElementById("output").innerHTML += row;
  });
  });
  }
getData();

  //FUNCTION ADD ROOM
  function addRoom ()
  {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
  purpose :"adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "quickpost_page.html";
  }


  //FUNCTION REDIRECTOROMMNAME
  function redirectToRoomName(name)
  {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "quickpost_page.html";
  }
  
