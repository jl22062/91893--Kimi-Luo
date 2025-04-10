const inputBox = document.querySelector('.searchInput');
const renderBox = document.getElementById('latexRender');

inputBox.addEventListener('input', () => {
const latex = inputBox.value;
renderBox.innerHTML = `\\(${latex}\\)`;
MathJax.typeset(); // Re-render LaTeX
});