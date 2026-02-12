import permittedCharacters  from './utils/permitted-characters.js';
import { randomInt } from 'node:crypto';

async function handle(err, result) {
    let characters = []
    let password = ""

    const passwordLength = Number(process.env.PASSWORD_LENGTH) || 10;
    characters = await permittedCharacters();

    if (characters.length === 0) {
        throw new Error("No characters selected for password generation.");
    }

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = randomInt(0, characters.length);
        password += characters[randomIndex];
    }

    return password;
}

export default handle;