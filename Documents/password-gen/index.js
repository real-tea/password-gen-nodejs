const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');
const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');

program.version('1.0').description('Password-generator');


program
    .option('-l,--length <number>','length of password','8')
    .option('-s,--save','password saved to pass.txt')
    .option('-nn,--no-numbers','remove numbers')
    .option('-ns,--no-symbols','remove symbols')
    .parse()

const {length,save,numbers,symbols} = program.opts()

//getting password generated 
const getpassword = createPassword(length,numbers,symbols);

//copy to clipboard
clipboardy.writeSync(getpassword);

//saving password generated
if(save)
{
    savePassword(getpassword)
    console.log(chalk.green('Password saved in password.txt'))
}

console.log(chalk.blue('Password generated: ')+ chalk.bold(getpassword));
console.log(chalk.yellow('Password copied to clipboard'));

    