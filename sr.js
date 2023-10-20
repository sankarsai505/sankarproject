document.getElementById("submit_button").addEventListener("click", submitForm);
document.getElementById("reset_button").addEventListener("click", resetForm);

function submitForm() {
    // Get form values
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var dob = document.getElementById("date_of_birth").value;
    var country = document.getElementById("country").value;
    var gender = document.querySelectorAll('input[name="gender"]:checked');
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobileNumber = document.getElementById("mobile_number").value;

    if (firstName === "" || lastName === "" || dob === "" || country === "" || gender.length === 0 || profession === "" || email === "" || mobileNumber === "") {
        alert("Please fill in all the required fields.");
        return;
    }
    var message = "First Name: " + firstName + "\n";
    message += "Last Name: " + lastName + "\n";
    message += "Date of Birth: " + dob + "\n";
    message += "Country: " + country + "\n";
    message += "Gender: ";
    gender.forEach(function(g) {message += g.value + " ";});
    message += "\n";
    message += "Profession: " + profession + "\n";
    message += "Email: " + email + "\n";
    message += "Mobile Number: " + mobileNumber + "\n";

    // Display the popup
    alert("Survey Form Data:\n\n" + message);

    // Reset the form
    document.getElementById("survey_form").reset();
}

function resetForm() {
    document.getElementById("survey_form").reset();
}
