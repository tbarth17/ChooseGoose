document.getElementById("update-button").onclick = function(){
var thimbles = document.getElementById("thimbles").value;
var a = Number(thimbles);
var swords = document.getElementById("swords").value;
var b = Number(swords);
var totalCost = ((a*1) + (b*37));
var grandTotalString = totalCost.toString();
var finalOutput = (grandTotalString + " monies");
document.getElementById("the-total").textContent = finalOutput;
}
