import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors';

const input = process.argv[2];
const langCode = franc(input);

if (langCode === "und") {
    console.log("Sorry! Couldn't figure it out! Try using more sample text!".red)
} else {
    const language = langs.where(3, langCode);
    console.log(`Our best guess is: ${language.name}`.green);
}