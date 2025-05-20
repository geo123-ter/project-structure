

const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const wrapper = document.querySelector(".wrapper");
const loginTitle = document.querySelector(".title-login");
const registerTitle = document.querySelector(".title-register");
const signUpBtn = document.querySelector("#SignUpBtn");
const signInBtn = document.querySelector("#SignInBtn");


function loginFunction() {
    loginForm.style.left = "50%";
   loginForm.style.opacity = 1;
      registerForm.style.left = "150%";
   registerForm.style.opacity = '0';
   wrapper.style.height = "500px";
   loginTitle.style.top = "50%";
   loginTitle.style.opacity = 1;
    registerTitle.style.top = "50px";
    registerTitle.style.opacity = 0;
}

function registerFunction() {
    loginForm.style.left = "-50%";
   loginForm.style.opacity = 0;
   registerForm.style.left = "50%";
   registerForm.style.opacity = 1;
   wrapper.style.height = "580px";
   loginTitle.style.top = "-60px";
   loginTitle.style.opacity = 0;
    registerTitle.style.top = "50%";
    registerTitle.style.opacity = 1;
}


            // Login validation
            loginForm.addEventListener('submit', function(e) {
                const email = document.getElementById('log-email').value.trim();
                const pass = document.getElementById('log-pass').value;
                let valid = true;
                if (!validateEmail(email)) {
                    alert('Please enter a valid email.');
                    valid = false;
                }
                if (pass.length < 7) {
                    alert('Password must be at least 6 characters.');
                    valid = false;
                }
                if (!valid) e.preventDefault();
            });

            // Register validation
            registerForm.addEventListener('submit', function(e) {
                const firstName = registerForm.querySelector('input[placeholder="first name"]').value.trim();
                const secondName = registerForm.querySelector('input[placeholder="second name"]').value.trim();
                const email = document.getElementById('reg-email').value.trim();
                const pass = registerForm.querySelector('input[placeholder="Password"]').value;
                const confirmPass = registerForm.querySelector('input[placeholder="confrim password"]').value;
                const agree = document.getElementById('agree').checked;
                let valid = true;

                if (!firstName || !secondName) {
                    alert('Please enter your first and second name.');
                    valid = false;
                }
                if (!validateEmail(email)) {
                    alert('Please enter a valid email.');
                    valid = false;
                }
                if (pass.length < 6) {
                    alert('Password must be at least 6 characters.');
                    valid = false;
                }
                if (pass !== confirmPass) {
                    alert('Passwords do not match.');
                    valid = false;
                }
                if (!agree) {
                    alert('You must agree to the terms and conditions.');
                    valid = false;
                }
                if (!valid) e.preventDefault();
            });

            function validateEmail(email) {
                // Simple email regex
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            }
        // Store login data to localStorage
        document.querySelector('.login-form').addEventListener('submit', function(e) {
            const email = document.getElementById('log-email').value.trim();
            const pass = document.getElementById('log-pass').value;
            if (email && pass.length >= 7) {
                localStorage.setItem('Email', email);
                localStorage.setItem('Password', pass);
            }
        });

        // Store register data to localStorage
        document.querySelector('.register-form').addEventListener('submit', function(e) {
            const firstName = document.querySelector('.register-form input[placeholder="first name"]').value.trim();
            const secondName = document.querySelector('.register-form input[placeholder="second name"]').value.trim();
            const email = document.getElementById('reg-email').value.trim();
            const pass = document.querySelector('.register-form input[placeholder="Password"]').value;
            if (firstName && secondName && email && pass.length >= 6) {
                localStorage.setItem('registerFirstName', firstName);
                localStorage.setItem('registerSecondName', secondName);
                localStorage.setItem('registerEmail', email);
                localStorage.setItem('registerPassword', pass);
            }
        });