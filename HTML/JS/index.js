function login(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = "user@gmail.com";
    const password = "password123";

    const uemail = document.getElementById("email").value;
    const upassword = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (uemail === email && upassword === password) {
        alert("Login successful");
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password. Please try again.");
        error.innerText = "Invalid email or password. Please try again.";
    }   

}