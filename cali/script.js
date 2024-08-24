let display = document.getElementById('display');
function clearDisplay() { display.textContent = '0'; }
function deleteNumber() {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === '') display.textContent = '0';
}
function appendNumber(number) {
    if (display.textContent === '0' && number !== '.') {
        display.textContent = number;
    } else { display.textContent += number; }
}
function calculateResult() {
    try { display.textContent = eval(display.textContent); } catch { display.textContent = 'Error'; }
}