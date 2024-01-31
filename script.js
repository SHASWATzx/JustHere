function login() {
    var passwordInput = document.getElementById("password");
    var resultDiv = document.getElementById("result");

    if (passwordInput.value === "CSS") {
        resultDiv.innerHTML = "https://www.youtube.com/watch?v=VOqgoQCuJds";
        resultDiv.style.color = "green";
        displayImage();
    } else {
        resultDiv.innerHTML = "Wrong password. Enter again.";
        resultDiv.style.color = "red";
    }

    resultDiv.classList.remove("hidden");
}

function displayImage() {
    // Replace the path with the actual path to your image file
    var imagePath = "Web Dev Journry\just trying now\passport.PNG";

    var img = new Image();
    img.src = imagePath;

    img.onload = function() {
        document.body.appendChild(img);
    };
}
