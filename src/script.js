// script.js
const uploadBtn = document.getElementById('uploadBtn');
const fileInput = document.getElementById('fileInput');
const fileName = document.getElementById('fileName');

uploadBtn.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', () => {
    fileName.textContent = fileInput.files[0]?.name || 'No file chosen';
});
