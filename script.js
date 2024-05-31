document.getElementById("entryForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    var names = document.getElementById("names");
    var email = document.getElementById("email");

    // Check if both fields are filled out
    if (names.value.trim() !== "" && email.value.trim() !== "") {
        console.log(names.value);
        localStorage.setItem("candidate_name", names.value);
        window.location.href = "question.html";
    } else {
        alert("Please enter both your name and email.");
    }
});
