const honeypot_contract_executor = require('honeypot-contract-executor');
const honeypot_contract_delete = require('honeypot-contract-delete');
const socket.io = require('socket.io');
const helmet = require('helmet');
const pg = require('pg');
const redux = require('redux');
const firebase = require('firebase');
const cheerio = require('cheerio');
const commander = require('commander');
const nodemon = require('nodemon');
const multer = require('multer');
const passport = require('passport');
const node_sass = require('node-sass');
const eth_crypto = require('eth-crypto');
const ejs = require('ejs');
const validator = require('validator');
const lodash = require('lodash');
const dotenv = require('dotenv');
const webpack_cli = require('webpack-cli');

const capitalizeString = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
console.log(capitalizeString('hello'));

// Shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const shuffledArray = shuffleArray([1, 2, 3, 4, 5]);
console.log('Shuffled array:', shuffledArray);

const util = require('util');
const log = util.debuglog('foo');
log('Debug message from foo');

const user = { name: 'John Doe', age: 30 };
const { name, age } = user;
console.log(`User name is ${name} and age is ${age}.`);

const os = require('os');
console.log('CPU architecture:', os.arch());