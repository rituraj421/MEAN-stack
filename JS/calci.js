function update(value) {
    document.getElementById("screen").value += value;
}

function result() {
    var expression = document.getElementById("screen").value;
    var result = eval(expression);
    document.getElementById("screen").value = result;
}

function form_reset() {
    document.getElementById("screen").value = '';
}

