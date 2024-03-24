function validate() {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(sessionStorage.getItem('email'));
    if (email == sessionStorage.getItem('email')) {
        var message = "Login Successful"
        console.log(message)
        openPopup(message);
    } else {
        var message = "Wrong Credentials"
    }
}

function openPopup(message) {
    event.preventDefault();
    console.log(message)
    // document.getElementById('popup').appendChild
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}