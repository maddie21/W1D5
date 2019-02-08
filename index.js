const chalk = require('chalk');
const log = console.log;


log(chalk.green('Hello') + ' World' + chalk.red('!'));
log(chalk.blue.bgRed.italic('Hello world!'));
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
log(chalk.black.bgCyan('bold', 'dim', 'italic', 'underline', 'inverse', 'strikethrough'));



console.log(chalk.magenta('Hello world!'));