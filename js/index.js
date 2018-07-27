var firstValue = document.getElementById('number');
var brlOutput = document.getElementById('resBrl');
var guaOutput = document.getElementById('resGua');

// currencies
currentDolar = 3.98;
currentGua = 5660;

function convertAll(x){
	x = firstValue.value;
	brlOutput.value = parseFloat((x * currentDolar).toFixed(2));
	guaOutput.value = parseFloat((x * currentGua).toFixed(2));
}