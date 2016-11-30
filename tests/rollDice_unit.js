'use strict';
const expect = require('chai').expect;
const generator = require('../generator.js');

describe(`rollDice function`, function (){
  it(`outputs the expected values`, function (){
    var value = generator.rollDice('6');
    expect(value).to.be.within(1,6);
  });
  it(`takes % as a value`, function(){
    let value = generator.rollDice('%');
    expect(value).to.be.within(10,100);
    expect(value % 10).to.equal(0);
  });
});
