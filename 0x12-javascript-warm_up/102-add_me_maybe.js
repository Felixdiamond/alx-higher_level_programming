#!/usr/bin/node

function incrementAndCall (number, theFunction) {
  theFunction(number);
  number++;
  return number;
}

module.exports = {
  incrementAndCall
};
