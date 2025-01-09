## CLI Tool
**This CLI tool is a simple Typescript application that uses commander to parse command line arguments. It has features such as file compression , file decompression and string Manipulation.**

### Tools used:
- Node.js
- Typescript
- Commander - for parsing command line arguments
- zlib - for file compression and decompression
- voca - for string manipulation
- axios - for fetching data from API

### Usage
```bash
# install dependencies
npm install
# run the tool
npm run build
npm run start

```
### Features
```bash
# to show all clitools
clitools show
# compress a file
clitools compress -f file.txt -o compressed.txt
# decompress a file
clitools decompress -f compressed.txt -o decompressed.txt 
# manipulate a string
clitools strMan "yourString"
# to fetch weather details
clitools weather "London"
```