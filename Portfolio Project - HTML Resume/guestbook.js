// Use validate function after user click submit button
document.getElementById("guestbookForm").onsubmit = validate;

function validate() {
    //Create flag variable
    let isValid = true;

    // Clear all error messages before checking
    let errors = document.getElementsByClassName("err");
    for (let i=0; i<errors.length; i++) {
        errors[i].style.display = "none";

    }

    // Check first name
    let first = document.getElementById("fname").value;
    if(first === "") {
        let errFirst = document.getElementById("err-fname");
        errFirst.style.display = "inline";
        isValid = false;

    }

    // Check last name
    let last = document.getElementById("lname").value;
    if(last === "") {
        let errLast = document.getElementById("err-lname");
        errLast.style.display = "inline";
        isValid = false;

    }


    // Check Email address:

    // 1. Email address is optional. But if the user provides one, it
    // must contain an @ symbol and a dot
    let email = document.getElementById("emailAdd").value;

    if(email !== "") { // first check is mail address is empty
        // if mail not contain dot or @ display and error message.
        if(!email.includes(".") || !email.includes("@")) {
            let errMailFormat = document.getElementById("err-emailFormat");
            errMailFormat.style.display = "inline";
            isValid = false;
        }
    }

    // 2. If the user checks the mailing list checkbox, then email address is required
    let addToMailingCheckbox = document.getElementById("addMeCheckbox").checked;
    if (addToMailingCheckbox && email==="") {
        let errMailRequired = document.getElementById("err-emailRequired");
        errMailRequired.style.display = "inline";
        isValid = false;
    }

    // Check LinkedIn address
    // LinkedIn address is optional. If one is provided, it must start
    // with "http" and end with ".com"
    let linkedIn = document.getElementById("linkedInURL").value;

    if(linkedIn !== "") { // check does linkedIn address is empty
        // if linkedIn not empty must start with "http" and end with ".com".
        if(!linkedIn.startsWith("http") || !linkedIn.endsWith(".com")) {
            let errLinkedInURL = document.getElementById("err-linkedInURL");
            errLinkedInURL.style.display = "inline";
            isValid = false;
        }
    }

    // Check does how we met option is selected
    let meetingType = document.getElementById("meetingType").value;
    if (meetingType === "choose") {
        let errMeetingType = document.getElementById("err-meetingType");
        errMeetingType.style.display = "inline";
        isValid = false;
    }

    return isValid;
} //end validate function


// This function makes a "placeWeMet" input field visible, if option "other"
// is selected
function showOther(val){
    let element=document.getElementById('placeWeMet');
    if(val==='other')
        element.style.display='block';
    else
        element.style.display='none';
}


// This function makes email format buttons (HTML, text) are only visible
// when the mailing list checkbox is checked.
function showEmailFormat() {
    let element = document.getElementById("emailFormat");
    if (document.getElementById('addMeCheckbox').checked)
        element.style.display = "block";
    else
        element.style.display='none';

}

