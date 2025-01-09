import zlib from 'zlib';
import fs from 'fs';
import chalk from 'chalk';

const compressFile = () => {

    const gzip = zlib.createGzip();
    const inp = fs.createReadStream('./src/demo.txt'); // input file which you want to compress
    const out = fs.createWriteStream('newFile_for_decompression.txt.gz'); // output file which will be created after compression

    inp.pipe(gzip).pipe(out);

    inp.on("error", (error) => {
        console.log(chalk.red(`Some error occurred while reading input file, ${error}`));
    })

    out.on("error", (error) => {
        console.log(chalk.red(`Some error occurred while writing output file, ${error}`));
    })

    out.on("finish", () => {
        console.log(chalk.green(`File compressed Successfully and saved as newfile.txt.gz`))
    })
};

const decompressFile = () => {
    const gunzip = zlib.createGunzip();
    const inp = fs.createReadStream('newFile_for_decompression.txt.gz');
    const out = fs.createWriteStream('newDecompressedFile.txt');

    inp.pipe(gunzip).pipe(out)

    inp.on('error', (err) => {
        console.error(chalk.red('Error reading the input file:', err));
    });
    
    out.on('error', (err) => {
        console.error(chalk.red('Error writing to the output file:', err));
    });
    
    out.on('finish', () => {
        console.log(chalk.green('File decompressed successfully!'));
    });
}

export { 
    compressFile, 
    decompressFile
};