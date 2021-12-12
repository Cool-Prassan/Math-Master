username = localStorage.getItem("user_name"); 
document.getElementById("welcome").innerHTML="Welcome "+username+"!";

function PreviewImage() {
    var pic = new FileReader();
    pic.readAsDataURL(document.getElementById("uploadImage").files[0]);

    pic.onload = function (oFREvent) {
        document.getElementById("profile").src = oFREvent.target.result;
    };
};

function worksheet() {
    window.location = "work.html";
}

function cal() {
    window.location = "cal.html";
}

function chat() {
    window.location = "cons.html";
}

function todo() {
    window.location = "todo.html";
}
function Logout() {
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location = "index.html"; 
}