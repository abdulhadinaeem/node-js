import logger from './logger.js';
import path from 'path';

const pathObj = path.parse(import.meta.url);
console.log(pathObj);
console.log(logger);
logger.log('Hello, World!');
// function sayHello(name){
//     console.log("Hello, " + name + "!");
// }
// sayHello('Hadi')