'use strict';
//var diceExpression = document.getElementById('expresssionInput').value;

exports.diceRoller = function(message) {
  //this should take expressions like 3d6 etc.
  var diceExpression = message.replace(/^\/r /,'');
  console.log(diceExpression);
  var count = diceExpression.match(/^[^d]*/)[0] || 1;
  // console.log(count);
  var die = diceExpression.match(/d(.[^+\-*\/\s]*)/)[1];
  var operator = diceExpression.match(/[\+\-\/\*]/) ? diceExpression.match(/[\+\-\/\*]/)[0] : 0;
  var operand = diceExpression.match(/[\+\-\/\*](.*)/) ? diceExpression.match(/[\+\-\/\*](.*)/)[1] : 0;
  var diceArray = [];
  var total = 0;
  for (var i = 0; i < count; i++) {
    var value = rollDice(die);
    diceArray[i] = value;
    total += value;
  }
  if (operator && operand) {
    if (operator === '+') {
      total += parseInt(operand);
    } else if(operator ===  '-') {
      total -= parseInt(operand);
    }else if(operator ===  '*') {
      total *= parseInt(operand);
    }else if(operator ===  '/') {
      total /= parseInt(operand);
    }
  }

  return `${diceArray}${operator || ''}${operand || ''} = ${total}`;
};

function rollDice(sides) {
  var multiplier = 1;
  if (sides == '%') {
    sides = 10;
    multiplier = 10;
   }
  return Math.floor(Math.random() * (sides) + 1) * (multiplier);
};
