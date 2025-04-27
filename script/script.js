function inputBox(){
    if (!document.querySelector('.inputBox')) {
        const box = document.createElement("div");
        box.className = "inputBox";

        const input = document.createElement("input");
        input.className = "boxInput";
        input.placeholder = "Enter your formula...";
        const searchBar = document.querySelector('.searchBar');
        input.value = searchBar.getAttribute('data-formula') || '';
        
        box.appendChild(input);
        document.querySelector('.searchBar').after(box);
        input.focus();

        input.addEventListener('input', () => {
            const formula = input.value;
            searchBar.setAttribute('data-formula', formula);
            searchBar.innerHTML = `\\[${formula}\\]`;
            MathJax.typesetPromise([searchBar]);
        });

        input.addEventListener('blur', () => {
            box.remove();
        });
    }
}
