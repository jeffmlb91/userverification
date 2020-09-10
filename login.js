function validate() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password == "") {
        alert("Field Cannot be empty.");
    }
    else if (password != confirmPassword) {
        alert("Password does not match");
        return false
    }
    else if (password == confirmPassword) {
        alert("You have successfully logged in")
    } return true

}