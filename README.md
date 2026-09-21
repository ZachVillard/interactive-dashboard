# Interactive Productivity Dashboard
<dl>
  <dt>Description</dt>
  <dd>This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.</dd>
</dl>

## TODO: Future Enhancements

- [ ] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [X] Add a weekly task goal calculator

## Weekly Task Goals
  <p>The featured calculator provides the user with the total amount of tasks per week,
  multiplying daily tasks by five and also additional tasks outside of the user's
  primary goal.</p>

## Imperial/Metric Converter
  <p>This program will take any number a user will input, then give them an option
  to convert it to a certain measurement to a different kind of measurement. For example, if a user inputs 1 and converts it from inches to centimeters, their input will be multiplied by 
  2.54 to reach 1 centimeter for output.</p>

### Logic and Pseudocode
BEGIN

SET in_to_cm to 2.54

SET ft_to_cm to 30.48

SET yd_to_m to 0.91

SET mi_to_km to 1.61

SET cm_to_in to 0.39

SET cm_to_ft to 0.0328

SET m_to_yd to 1.09

SET km_to_mi to 0.62

INPUT number

ASSIGN number to parseFloat() function

IF the user wishes to convert inches to centimeters:

	Multiply number to in_to_cm

	ASSIGN number to toFixed(2) function

ELSE IF the user wishes to convert feet to centimeters:

	Multiply number to ft_to_cm

	ASSIGN number to toFixed(2) function

ELSE IF the user wishes to convert yards to meters:

	Multiply number to yd_to_m

	ASSIGN number to toFixed(2) function

ELSE IF the user wishes to convert miles to kilometers:

	Multiply number to mi_to_km

	ASSIGN number to toFixed(2) function

ELSE IF the user wishes to convert centimeters to inches:

	Multiply number to cm_to_in

	ASSIGN number to toFixed(2) function

ELSE IF the user wishes to convert centimeters to feet:

	Multiply number by cm_to_ft

	ASSIGN number to toFixed(4) function

ELSE IF the user wishes to convert centimeters to feet:

	Multiply number to cm_to_ft

	ASSIGN number to toFixed(2) function

ELSE IF the user wishes to convert meters to yards:

	Multiply number to m_to_yd

	ASSIGN number to toFixed(2) function

ELSE IF the user wishes to convert kilometers to miles:

	Multiply number to km_to_mi

	ASSIGN number to toFixed(2) function

OUTPUT number

END
