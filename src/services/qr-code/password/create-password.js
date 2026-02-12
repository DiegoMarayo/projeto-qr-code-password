import chalk from 'chalk';
import handle from './generate-password.js';
import prompt from 'prompt';

async function createPassword(){
    try {
        console.log(chalk.green('\nGenerating password...'));
        const password = await handle();
        console.log(chalk.blue.bold(`Your password is: ${password}`));
    } catch (error) {
        console.error('Error generating password:', error.message);

    } await new Promise((resolve) => {
        prompt.get({ name: 'continue', description: chalk.yellow.bold('\nPress Enter to continue') }, () => {
            resolve();
        });
    })
}

export default createPassword;