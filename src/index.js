import prompt from "prompt";
import promptSchemaMain from "./prompt-schema/prompt-schema-main.js";
import createQRCode  from "./services/qr-code/create-qrcode.js";
import createPassword from "./services/qr-code/password/create-password.js";
import chalk from "chalk";
import "dotenv/config";

let running = true;

async function main() {
    console.clear();
    while (running) {
        const choose = await new Promise((resolve, reject) => {
            prompt.get(promptSchemaMain, (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });

        if (choose.select === "1") await createQRCode();
        else if (choose.select === "2") await createPassword();
        else if (choose.select === "3") {
            console.log(chalk.green("\nExiting..."));
            running = false;
        }

        console.clear();
    }
}

prompt.start();
process.on("SIGINT", () => {
    console.log(chalk.yellow("\nEncerrando aplicação..."));
    running = false;
});

main().catch((err) => {
    console.error(chalk.red("\nUnexpected error:"), err.message);
});
