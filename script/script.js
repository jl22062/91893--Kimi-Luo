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

function balance() {
    const searchBar = document.querySelector('.searchBar');
    const rawFormula = (searchBar.getAttribute('data-formula') || '').replace(/\s+/g, '');

    // Reaction table, this is generated VIA AI
    const reactions = {
        // metal + HCl
        "Li+HCl": "LiCl+H_2",
        "Na+HCl": "NaCl+H_2",
        "K+HCl": "KCl+H_2",
        "Mg+HCl": "MgCl_2+H_2",
        "Ca+HCl": "CaCl_2+H_2",
        "Zn+HCl": "ZnCl_2+H_2",
        "Fe+HCl": "FeCl_2+H_2",
        "Al+HCl": "AlCl_3+H_2",
        "Pb+HCl": "PbCl_2+H_2",

        // metal + H2SO4
        "Li+H_2SO_4": "Li_2SO_4+H_2",
        "Na+H_2SO_4": "Na_2SO_4+H_2",
        "K+H_2SO_4": "K_2SO_4+H_2",
        "Mg+H_2SO_4": "MgSO_4+H_2",
        "Ca+H_2SO_4": "CaSO_4+H_2",
        "Zn+H_2SO_4": "ZnSO_4+H_2",
        "Fe+H_2SO_4": "FeSO_4+H_2",
        "Al+H_2SO_4": "Al_2(SO_4)_3+H_2",
        "Pb+H_2SO_4": "PbSO_4+H_2",

        // metal + HNO3
        "Li+HNO_3": "LiNO_3+H_2",
        "Na+HNO_3": "NaNO_3+H_2",
        "K+HNO_3": "KNO_3+H_2",
        "Mg+HNO_3": "Mg(NO_3)_2+H_2",
        "Ca+HNO_3": "Ca(NO_3)_2+H_2",
        "Zn+HNO_3": "Zn(NO_3)_2+H_2",
        "Fe+HNO_3": "Fe(NO_3)_2+H_2",
        "Al+HNO_3": "Al(NO_3)_3+H_2",
        "Pb+HNO_3": "Pb(NO_3)_2+H_2",

        // metal + H2CO3
        "Li+H_2CO_3": "Li_2CO_3+H_2",
        "Na+H_2CO_3": "Na_2CO_3+H_2",
        "K+H_2CO_3": "K_2CO_3+H_2",
        "Mg+H_2CO_3": "MgCO_3+H_2",
        "Ca+H_2CO_3": "CaCO_3+H_2",
        "Zn+H_2CO_3": "ZnCO_3+H_2",
        "Fe+H_2CO_3": "FeCO_3+H_2",
        "Al+H_2CO_3": "Al_2(CO_3)_3+H_2",
        "Pb+H_2CO_3": "PbCO_3+H_2",

        // metal + H3PO4
        "Li+H_3PO_4": "Li_3PO_4+H_2",
        "Na+H_3PO_4": "Na_3PO_4+H_2",
        "K+H_3PO_4": "K_3PO_4+H_2",
        "Mg+H_3PO_4": "Mg_3(PO_4)_2+H_2",
        "Ca+H_3PO_4": "Ca_3(PO_4)_2+H_2",
        "Zn+H_3PO_4": "Zn_3(PO_4)_2+H_2",
        "Fe+H_3PO_4": "Fe_3(PO_4)_2+H_2",
        "Al+H_3PO_4": "AlPO_4+H_2",
        "Pb+H_3PO_4": "Pb_3(PO_4)_2+H_2",

        // metal + H2O
        "Li+H_2O": "LiOH+H_2",
        "Na+H_2O": "NaOH+H_2",
        "K+H_2O": "KOH+H_2",
        "Ca+H_2O": "Ca(OH)_2+H_2",
        "Mg+H_2O": "Mg(OH)_2+H_2",

        // metal + NaOH
        "Al+NaOH": "Na[Al(OH)_4]+H_2",
        "Zn+NaOH": "Na_2ZnO_2+H_2",

        // metal + KOH 
        "Al+KOH": "K[Al(OH)_4]+H_2",
        "Zn+KOH": "K_2ZnO_2+H_2"
    };

    const output = reactions[rawFormula];

    if (output) {
        searchBar.innerHTML = `\\[${rawFormula} \\quad \\rightarrow \\quad ${output}\\]`;
    } else {
        searchBar.innerHTML = `\\[invalid\\space formula\\]`;
    }
    MathJax.typesetPromise([searchBar]);
}

