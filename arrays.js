
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(datos, item) {
  return [item, ...datos];
}

function destructivelyAddElementToBeginningOfArray(datos, item) {
  datos.unshift(item);

  return datos;
}

function addElementToEndOfArray(datos, item) {
  return [...datos, item];
}

function destructivelyAddElementToEndOfArray(datos, item) {
  datos.push(item);

  return datos;
}
