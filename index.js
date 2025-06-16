// function convertToCelsius(fahrenheit) {
//   return (fahrenheit - 32) * (5 / 9);
// }
// const celsius = convertToCelsius(10);
// console.log(celsius);

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

function describeTemperature(fahrenheit) {
  let description;

  const celsius = convertToCelsius(fahrenheit);

  if (celsius < 0) {
    description = "very cold";
  } else if (celsius < 20) {
    description = "cold";
  } else if (celsius < 30) {
    description = "warm";
  } else if (celsius < 40) {
    description = "hot";
  } else {
    description = "very hot";
  }

  return `${fahrenheit} Fahrenheit is equivalent to ${celsius} in Celsius. That's ${description}.`;
}

const fahrenheit = prompt("Please enter a temperature in Fahrenheit:");
const description = describeTemperature(fahrenheit);
alert(description);
