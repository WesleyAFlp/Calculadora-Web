function insert(value) {
    var value2 = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = value2 + value;
}

function clearDisplay() {
    document.getElementById('result').innerHTML = "";
}

function back() {
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}

function calculate() {
    var result = document.getElementById('result').innerHTML;
    if (result) {
        document.getElementById('result').innerHTML = eval(result);
    } 
}
