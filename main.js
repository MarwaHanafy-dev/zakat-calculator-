document.querySelector("button").addEventListener("click", () => {
    let amount = parseFloat(document.getElementById("zakah").value);
    
    if (isNaN(amount)) {
        alert("⚠️ أدخل مبلغًا صحيحًا بالجنيه!");
        return;
    }

    let zakat = amount * 0.025;
    alert(`زكاتك المستحقة: ${zakat.toFixed(2)} جنيه`);
});