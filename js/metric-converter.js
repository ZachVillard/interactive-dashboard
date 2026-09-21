function conversion(number) {
  var in_to_cm = 2.54;
  var ft_to_cm = 30.48;
  var yd_to_m = 0.91;
  var mi_to_km = 1.61;
  var cm_to_in = 0.39;
  var cm_to_ft = 0.0328;
  var m_to_yd = 1.09;
  var km_to_mi = 0.62;

  var choice = document.getElementById("convert").value;

  if (choice === document.getElementById("in_To_cm").value) {
    number = number * in_to_cm;
    number = number.toFixed(2);
  } else if (choice === document.getElementById("ft_To_cm").value) {
    number = number * ft_to_cm;
    number = number.toFixed(2);
  } else if (choice === document.getElementById("yd_To_m").value) {
    number = number * yd_to_m;
    number = number.toFixed(2);
  } else if (choice === document.getElementById("mi_To_km").value) {
    number = number * mi_to_km;
    number = number.toFixed(2);
  } else if (choice === document.getElementById("cm_To_in").value) {
    number = number * cm_to_in;
    number = number.toFixed(2);
  } else if (choice === document.getElementById("cm_To_ft").value) {
    number = number * cm_to_ft;
    number = number.toFixed(4); // Only this one uses 4 decimal places
  } else if (choice === document.getElementById("m_To_yd").value) {
    number = number * m_to_yd;
    number = number.toFixed(2);
  } else if (choice === document.getElementById("km_To_mi").value) {
    number = number * km_to_mi;
    number = number.toFixed(2);
  }

  document.getElementById("convertOutput").innerHTML = number;
};

const btn = document.getElementById("convert-btn");
btn.addEventListener("click", function(event) {
    event.preventDefault();
    var number = document.getElementById("numInput").value;
    number = parseFloat(number);
    conversion(number);
});
