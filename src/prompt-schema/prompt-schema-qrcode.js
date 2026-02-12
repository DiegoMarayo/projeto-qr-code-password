import chalk from "chalk";

const promptSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow.bold("\nDigite o link para gerar o QR Code"),
        required: true
    },
    {
        name: "type",
        description: chalk.yellow.bold("\nEscolha o tipo do QR Code: \n1 - NORMAL \n2 - TERMINAL"),
        pattern: /^[1-2]$/,
        message: chalk.red.bold("Por favor, escolha 1 ou 2"),
        required: true
    }
];

export default promptSchemaQRCode;