'use strict';
const expect = require('chai').expect;
const diceRoller = require('../generator').diceRoller;

describe('The Dice Roller takes expression', function(){
  it('1d6 should return a value', function(){
    var value = diceRoller('1d6')[0];
    console.log(`output from diceRoller`, value);
    expect(value).to.be.within(1,6);
  })
});
