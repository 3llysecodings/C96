// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsw0_4qIw_vvXP438sgeMJhjLCD1Cx-Zs",
    authDomain: "letschat-a2fde.firebaseapp.com",
    projectId: "letschat-a2fde",
    storageBucket: "letschat-a2fde.appspot.com",
    messagingSenderId: "359540789680",
    appId: "1:359540789680:web:d9af73de34ed79178e0675",
    measurementId: "G-R459LNNYK3"
  };

function addUser()
{

    user_name = document.getElementById("user_name").value;
    
    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebaseConfig.database().ref("/").child(room_name).update ({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name" , room_name);

  window.location = "kwitter_page.html";

}