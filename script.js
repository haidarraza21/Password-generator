const passwordBox = document.querySelector('#password');
const copyMessage = document.querySelector('#copy-message');
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+|}{[]></-=";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    // Ensure at least one of each character type is included
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // Fill the rest of the password with random characters
    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle the password for randomness
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    // Display the password
    passwordBox.value = password;
}

function copyPassword() {
    if (passwordBox.value === "") {
        alert("Please generate a password first!");
        return;
    }

    // Copy the password to clipboard
    passwordBox.select();
    document.execCommand("copy");

    // Show the "Copied" message
    copyMessage.textContent = "Copied!";
    copyMessage.style.opacity = "1";

    // Hide the message after 2 seconds
    setTimeout(() => {
        copyMessage.style.opacity = "0";
    }, 2000);
}
