function login() {
    user_name = document.getElementById("login_input").value; 

    localStorage.setItem("user_name",user_name); 

    window.location = "home.html"; 
}