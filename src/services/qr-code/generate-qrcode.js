import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result) {
    return new Promise((resolve) => {
        if (err) {
            console.error("Error on application", err);
            return resolve();
        }

        const isSmall = result.type === "2";

        qr.generate(result.link, { small: isSmall }, (qrcode) => {
            console.log(chalk.green.bold("\nQR Code generated successfully!"));
            console.log(qrcode);
            resolve();
        });
    });
}


export default handle;