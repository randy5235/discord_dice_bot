'use strict';
const expect = require('chai').expect;
const diceRoller = require('../generator').diceRoller;

describe('The Dice Roller takes basic dice expressions', function(){
  it('1d6 should return a value between 1 and 6', function(){
    var value = diceRoller('1d6');
    console.log(`output from diceRoller`, value[value.length-1]);
    expect(value[value.length-1]).to.be.within(1,6);
  });
  it('2d6 should return a value between 2 and 12', function(){
    var value = diceRoller('2d6');
    console.log(`output from diceRoller`, value[value.length-1]);
    expect(value[value.length-1]).to.be.within(2,12);
  });
  it('d6 should return a value between 1 and 6', function(){
    var value = diceRoller('2d6');
    console.log(`output from diceRoller`, value[value.length-1]);
    expect(value[value.length-1]).to.be.within(1,6);
  });
});
