$(document).ready(function () {

    function generateCaptcha() {
        let num1 = Math.floor(Math.random() * 10) + 1;
        let num2 = Math.floor(Math.random() * 10) + 1;
        let operators = ['+', '-', '*'];
        let operator = operators[Math.floor(Math.random() * operators.length)];
        let question = `${num1} ${operator} ${num2}`;
        let answer = eval(question); // Calculate answer safely
    
        document.getElementById('captchaQuestion').innerText = question;
        document.getElementById('captchaAnswer').dataset.answer = answer; // Store answer
    }
    
    document.getElementById("bookingForm").addEventListener("submit", function(event) {
        let userAnswer = document.getElementById('captchaAnswer').value;
        let correctAnswer = document.getElementById('captchaAnswer').dataset.answer;
    
        if (parseInt(userAnswer) !== parseInt(correctAnswer)) {
            event.preventDefault();
            document.getElementById("captchaError").innerText = "Incorrect answer. Try again.";
            generateCaptcha();
        } else {
            document.getElementById("captchaError").innerText = "";
        }
    });
    
    // Generate a CAPTCHA when the page loads
    generateCaptcha();
});
  