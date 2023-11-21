const foo = [
  (item1 = ["Item1", ["speed", 16], ["weight", 7], ["otherStuff", 3]]),
  (item2 = ["Item2", ["speed", 12], ["weight", 6], ["otherStuff", 2]]),
  (item3 = ["Item3", ["speed", 17], ["weight", 3], ["otherStuff", 7]]),
  (item4 = ["Item4", ["speed", 19], ["weight", 12], ["otherStuff", 6]]),
];

function findOperator(value1, value2) {
  let toReturn;

  if (value1 === value2) {
    toReturn = " = ";
  } else if (value1 > value2) {
    toReturn = " > ";
  } else if (value1 < value2) {
    toReturn = " < ";
  }

  return toReturn;
}

const selectedItemsIndexes = [0, 1];

const selectedItems = [
  foo[selectedItemsIndexes[0]],
  foo[selectedItemsIndexes[1]],
];

const item1Title = document.getElementById("item1-title-grid");
const item2Title = document.getElementById("item2-title-grid");

const measurementTitle1 = document.getElementById("measurement-title1");
const Item1MeasurementValue1 = document.getElementById(
  "item1-measurement-value1"
);
const measurementOperator1 = document.getElementById("measurement-operator1");
const Item2MeasurementValue1 = document.getElementById(
  "item2-measurement-value1"
);

const measurementTitle2 = document.getElementById("measurement-title2");
const Item1MeasurementValue2 = document.getElementById(
  "item1-measurement-value2"
);
const measurementOperator2 = document.getElementById("measurement-operator2");
const Item2MeasurementValue2 = document.getElementById(
  "item2-measurement-value2"
);

const measurementTitle3 = document.getElementById("measurement-title3");
const Item1MeasurementValue3 = document.getElementById(
  "item1-measurement-value3"
);
const measurementOperator3 = document.getElementById("measurement-operator3");
const Item2MeasurementValue3 = document.getElementById(
  "item2-measurement-value3"
);

item1Title.innerHTML = selectedItems[0][0];
item2Title.innerHTML = selectedItems[1][0];

measurementTitle1.innerHTML = selectedItems[0][1][0];
Item1MeasurementValue1.innerHTML = selectedItems[0][1][1];
measurementOperator1.innerHTML = findOperator(
  selectedItems[0][1][1],
  selectedItems[1][1][1]
);
Item2MeasurementValue1.innerHTML = selectedItems[1][1][1];

measurementTitle2.innerHTML = selectedItems[0][2][0];
Item1MeasurementValue2.innerHTML = selectedItems[0][2][1];
measurementOperator2.innerHTML = findOperator(
  selectedItems[0][2][1],
  selectedItems[1][2][1]
);
Item2MeasurementValue2.innerHTML = selectedItems[1][2][1];

measurementTitle3.innerHTML = selectedItems[0][3][0];
Item1MeasurementValue3.innerHTML = selectedItems[0][3][1];
measurementOperator3.innerHTML = findOperator(
  selectedItems[0][3][1],
  selectedItems[1][3][1]
);
Item2MeasurementValue3.innerHTML = selectedItems[1][3][1];
