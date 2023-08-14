// // Replace this with your code
function handleClick(event) {
    const form = document.querySelector("#sign-up")
    const btnToggle = document.querySelector("#close");
    const userName = document.querySelector("#name");
    const userEmail = document.querySelector("#email");
    const subscribeHeader = document.getElementsByClassName("form-container")[0]
    // Add an event listener on the #close - form element to handle the 'click' event, so that when users click on the element,
    //     it toggles the hide class on the form, so the contents of the form collapse.
    //     it changes from displaying 'X' to '+'.
    btnToggle.addEventListener("click", function () {
        form.classList.toggle("hide");
        btnToggle.textContent = form.classList.contains("hide") ? "+" : "X";
    });
    // Add an event listener on the form to handle the 'submit' event, so that when users submit the form, it gives feedback if the user didn’t fill out the form correctly:
    //form.addEventListener("submit",);
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // if the user doesn’t give a name, the associated input element should get a 2px - wide, solid red border and the page should alert, “Please enter a name to subscribe.”
        if (!userName.value.trim()) {
            userName.style.border = "2px solid red"
            alert("Please enter a name to subscribe");
        }
        // if the user doesn’t give an email, the associated input element should get a 2px - wide, solid red border and the page should alert, “Please enter an email address to subscribe.”
        else if (!userEmail.value.trim()) {
            userEmail.style.border = "2px solid red"
            alert("Please enter an email address to subscribe");
        }
        // if the user doesn’t give a name or email, both inputs should still get the 2px - wide, solid red border like usual but the page should alert, “You must enter a name and an email address to subscribe!”
        else if (!userName.value.trim() && !userEmail.value.trim()) {
            userName.style.border = "2px solid red"
            userEmail.style.border = "2px solid red"
            alert("You must provide a name and an email address to subscribe")
        }
        // If the user fills out both required fields, then replace the text of the form’s parent element to say, “Thank you for subscribing!”
        else {
            // subscribeHeader.parentElement.textContent = "Thank you for subscribing"
            subscribeHeader.innerText = "Thank you for subscribing"
        }
    });

    userName.addEventListener("input", function () {
        nameInput.style.border = ""
    });

    userEmail.addEventListener("input", function () {
        userEmail.style.border = ""
    });
}