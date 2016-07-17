// Unit 8 Assignment  |  CS81, Summer 2016
// Tae Choe

/* --- Ex. 3 Two button function calls to conver temperature ---- */
var temp = function (f, c) {
    document.getElementById("newTemp").innerHTML =
        f + "\xb0F = " + c + "\xb0C";
};
// convertign  F to C with decimal point 1
document.getElementById("f_to_c").onclick = function () {
    var f = document.getElementById("temp").value;
    temp(f, (parseFloat(f - 32) / 1.8).toFixed(1));
};
// convertign  C to F with decimal point 1
 document.getElementById("c_to_f").onclick = function () {
 var c = document.getElementById("temp").value;
 temp((1.8 * c + 32).toFixed(1), c);
 };
