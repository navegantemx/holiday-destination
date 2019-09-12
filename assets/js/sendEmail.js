
function sendMail(contactForm) {
    emailjs.send("gmail", "holiday", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
                alert("Thank you, will contact you soon!");
            },
            function(error) {
                console.log("FAILED", error);
            }
        );
    return false; 
}




