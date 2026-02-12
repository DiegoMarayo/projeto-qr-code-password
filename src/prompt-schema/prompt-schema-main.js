import chalk from "chalk";

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.yellow.bold("\nEscolha a ferramenta: \n1 - QRCODE \n2 - PASSWORD \n3 - EXIT"),
        pattern: /^[1-3]$/,
        message: chalk.red.bold("Por favor, escolha uma opção válida (1, 2 ou 3)."),
        required: true
    }
];

export default promptSchemaMain;