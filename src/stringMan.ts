import voca from "voca";
import chalk from "chalk";


const stringMan = (str: string) => {
    console.log(chalk.yellowBright("The string in CAPITAL is:",voca.upperCase(str)))
    console.log(chalk.yellowBright("The string in LOWER is:",voca.lowerCase(str)))
    console.log(chalk.yellowBright("The total Word cound is:",voca.countWords(str)))
    

    if(str === voca.reverse(str)){
        console.log(chalk.bgMagenta("The String is Palindrome"))
    }else{
        console.log("String is Normal")
    }
}

export default stringMan;