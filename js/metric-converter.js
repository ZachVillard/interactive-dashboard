function conversion(number) {
  var in_to_cm = 2.54;
  var ft_to_cm = 30.48;
  var yd_to_m = 0.91;
  var mi_to_km = 1.61;
  var cm_to_in = 0.39;
  var cm_to_ft = 0.0328;
  var m_to_yd = 1.09;
  var km_to_mi = 0.62;

  var choice = document.getElementById("convert").selectedIndex;
  let convertedOutput = "";

  if (choice === 0) {
    let changedNumber = number * in_to_cm;
    changedNumber = changedNumber.toFixed(2);
    convertedOutput = number + " inches is equal to " + changedNumber + " centimeters.";
  } else if (choice === 1) {
    let changedNumber = number * ft_to_cm;
    changedNumber = changedNumber.toFixed(2);
    convertedOutput = number + " feet is equal to " + changedNumber + " centimeters.";
  } else if (choice === 2) {
    let changedNumber = number * yd_to_m;
    changedNumber = changedNumber.toFixed(2);
    convertedOutput = number + " yards is equal to " + changedNumber + " meters.";
  } else if (choice === 3) {
    let changedNumber = number * mi_to_km;
    changedNumber = changedNumber.toFixed(2);
    convertedOutput = number + " miles is equal to " + changedNumber + " kilometers.";
  } else if (choice === 4) {
    let changedNumber = number * cm_to_in;
    changedNumber = changedNumber.toFixed(2);
    convertedOutput = number + " centimeters is equal to " + changedNumber + " inches.";
  } else if (choice === 5) {
    let changedNumber = number * cm_to_ft;
    changedNumber = changedNumber.toFixed(4); // Only this one uses 4 decimal places
    convertedOutput = number + " centimeters is equal to " + changedNumber + " feet.";
  } else if (choice === 6) {
    let changedNumber = number * m_to_yd;
    changedNumber = changedNumber.toFixed(2);
    convertedOutput = number + " meters is equal to " + changedNumber + " yards.";
  } else if (choice === 7) {
    let changedNumber = number * km_to_mi;
    changedNumber = changedNumber.toFixed(2);
    convertedOutput = number + " kilometers is equal to " + changedNumber + " miles.";
  }

  document.getElementById("convertOutput").innerHTML = convertedOutput;
};

const convertBtn = document.getElementById("convert-btn");
convertBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var number = document.getElementById("numInput").value;
    number = parseFloat(number);
    conversion(number);
});
