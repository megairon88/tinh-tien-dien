function money() {
    let electric = document.getElementById('amount_electric').value;
    result = electric*2000;
    document.getElementById('result').innerHTML = + result + "VND";
}