import inquirer from "inquirer"
import chalk from "chalk"
import chalkAnition from "chalk-animation"
import figlet from "figlet"


let sleep = () => new Promise((resolve) => {
    return setTimeout(resolve, 1000)
})


const wellcome = chalkAnition.rainbow(figlet.textSync("Currency - Converter"));
await sleep();
wellcome.stop();

const Currency = async () => {

    const currency_converter = await inquirer.prompt([{
        name: "money_selection",
        type: "list",
        choices: ["PKR to Dollar", "Dollar to PKR ", "Euro to PKR", "PKR to Euro", "ETH to PKR", "PKR to ETH", "Bitcoin to PKR", "PKR to Bitcoin", "Saudi Riyal to PKR", "PKR to Saudi Riyal"],
        message: chalk.red("Select the option which you want to convert Amount :"),
    },
    {
        name: "input",
        type: "number",
        message: chalk.italic("Enter The Amount :")
    }])

    const { money_selection, input } = currency_converter;

    if (input > 0) {

        if (money_selection === "PKR to Dollar") {
            console.log(input / 282, "$");

        }
        else if (money_selection === "Dollar to PKR ") {
            console.log(input * 282, "PKR");

        }
        else if (money_selection === "Euro to PKR") {
            console.log(input * 311.56, "PKR");

        }
        else if (money_selection === "PKR to Euro") {
            console.log(input / 311.56, "Euro");

        }
        else if (money_selection === "ETH to PKR") {
            console.log(input * 527361.06, "PKR");

        }
        else if (money_selection === "PKR to ETH") {
            console.log(input / 527361.06, "ETH");
        }
        else if (money_selection === "Bitcoin to PKR") {
            console.log(input * 808434501.50, "PKR");
        }
        else if (money_selection === "PKR to Bitcoin") {
            console.log(input / 808434501.50, "Bitcoin");
        }
        else if (money_selection === "Saudi Riyal to PKR") {
            console.log(input * 75.29, "PKR");
        }
        else if (money_selection === "PKR to Saudi Riyal") {
            console.log(input / 75.29, "Saudi Riyal");
        }
    } else {
        console.log(chalk.yellow("Plz Enter The Amount Which You Want To Convert"));

    }
}



do {
    await Currency();

    var again = await inquirer.prompt([{
        name: "Again",
        type: "input",
        message: chalk.italic("DO You Want to Convert Again : (y / n)"),
        default: "y"
    }])


} while (again.Again === "Y" || again.Again === "y" || again.Again === "Yes" || again.Again === "yes")