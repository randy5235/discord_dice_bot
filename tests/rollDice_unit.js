'use strict';
const expect = require('chai').expect;
const rollDice = require('../generator.js').rollDice;

describe(`rollDice function`, function (){
  it(`outputs the expected values`, function (){
    let value = rollDice('6');
    expect(value).to.be.within(1,6);
  });
  it(`takes % as a value`, function(){
    let value = rollDice('%');
    expect(value).to.be.within(10,100);
    expect(value % 10).to.equal(0);
  });
  it(`generates expected value for d20`, () => {
    expect(rollDice(20)).to.be.within(1,20);
  });
  it(`expects 0 as the return value for 0 sides`,() => {
    expect(rollDice(0)).to.equal(0);
  });
});
