'use strict';

 module.exports = {
    generateRandomTaskName
    
  }; 

const Faker = require('faker');

function generateRandomTaskName(userContext, events, done) {
    // generate data with Faker:
    const productName = Faker.commerce.product();

    // add variables to virtual user's context:
    userContext.vars.productName = productName;

    // Print a randomly generated product:
    console.log(`Name: ${ productName }`);

    // continue with executing the scenario:
    return done();
  }