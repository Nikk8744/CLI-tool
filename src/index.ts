#!/usr/bin/env node

import { program } from "commander";
import { default as chalk } from 'chalk';
import { compressFile, decompressFile } from "./compress.js";
import weatherApi from "./weather.js";
import stringMan from "./stringMan.js";

program
    .command("show")
    .description("Show all information about this cli tool")
    .action(() => {
        console.log(chalk.bgBlue("This is a node cli tool"));
        console.log(chalk.bgYellow(`to compress use -> ${chalk.red("compress")}`))
        console.log(chalk.bgGreen(`to decompress use -> ${chalk.red("decompress")}`))
        console.log(chalk.bgGrey(`to see weather -> ${chalk.red("weather <city_name>")}`))
        console.log(chalk.bgMagenta(`to do string manipulation -> ${chalk.redBright('strMan "<string>"')}`))
        console.log(chalk.bgGrey(`to ask que to AI -> ${chalk.red(" <city_name>")}`))
    });

program
    .command('compress')
    .description("Compress a file")
    .option('-i, --input <file>', 'Input file to compress')
    .action(() => {
        compressFile();
        console.log(chalk.bgGrey.green("File compressed successfyully"))
    })

// for desc
program
    .command('decompress')
    .description("Decompress a file")
    // .option('-i, --input <file>', 'Input file to compress')
    .action(() => {
        decompressFile();
        console.log(chalk.bgGrey.green("File decompressed successfyully"))
    })

// for weather 
program
    .command("weather <city>")
    .description("The weather of certain city")
    .option('-t, --temp', "Weather of City")
    .action((city) => {
        weatherApi(city)
    })

program
    .command("strMan <str>")
    .description("String Manipulation")
    .action((str) => {
        stringMan(str)
    })

program.parse(process.argv);