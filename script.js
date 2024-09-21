const passwordDisplay = document.getElementById('password');
const generateButton = document.getElementById('generate-button');

generateButton.addEventListener('click', () => {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let passwordLength = 8; 
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        passwordDisplay.textContent=password;
});