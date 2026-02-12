import prompt from "prompt";
import promptSchemaQRCode from "../../prompt-schema/prompt-schema-qrcode.js";
import handle from "./generate-qrcode.js";
import chalk from "chalk";  

async function createQRCode() {
    const result = await new Promise((resolve, reject) => {
        prompt.get(promptSchemaQRCode, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });

    await handle(null, result);

        await new Promise((resolve) => {
            prompt.get({ name: 'continue', description: chalk.yellow.bold('\nPress Enter to continue') }, () => {
            resolve();
        });
        })

}

export default createQRCode;
