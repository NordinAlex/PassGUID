// Funktion för att generera lösenord
function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeLowercase = document.getElementById('include-lowercase').checked;
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeSpecial = document.getElementById('include-special').checked;

    const numbers = '0123456789';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const special = '!@#$%^&*()_+[]{}|;:,.<>?';

    if (length < 6 || length > 50) {
        alert('Ange ett nummer mellan 6 och 50 för lösenordslängd.');
        return;
    }

    let characters = '';
    let password = '';

    if (includeNumbers) characters += numbers;
    if (includeLowercase) characters += lowercase;
    if (includeUppercase) characters += uppercase;
    if (includeSpecial) characters += special;

    if (!characters) {
        alert('Välj åtminstone en typ av tecken.');
        return;
    }

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    const passwordResultElement = document.getElementById('password-result');
    passwordResultElement.innerText = password;
    document.getElementById('copy-password-btn').disabled = false;
}

// Funktion för att kopiera lösenord
function copyToClipboard(elementId, buttonId) {
    var passwordElement = document.getElementById(elementId);
    var tempInput = document.createElement('input');
    tempInput.value = passwordElement.innerText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    var copyButton = document.getElementById(buttonId);
    copyButton.innerText = 'Kopierat!';
    copyButton.classList.add('copied');
    setTimeout(function() {
        copyButton.innerText = 'Kopiera';
        copyButton.classList.remove('copied');
    }, 2000);
}
