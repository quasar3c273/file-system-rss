import {createReadStream, createWriteStream} from 'fs';
import {createBrotliDecompress} from 'zlib';
import {getTargetPath} from "../path/upPath.js";
import {basename, join} from "path";
import {access} from "fs/promises";
import printError from "../../utils/printError.js";

const decompressFunction = async (inputConsole) => {
  const newPath = inputConsole.trim().replace('decompress ', '')
  const [from, to] = newPath.split(' ');

  const sourceFilePath = getTargetPath(from);
  const destinationFolderPath = getTargetPath(to);

  const fileName = basename(sourceFilePath, '.br');
  const destinationFilePath = join(destinationFolderPath, fileName);

  try {
    await access(sourceFilePath);

    const source = createReadStream(sourceFilePath);
    const destination = createWriteStream(destinationFilePath);

    source.pipe(createBrotliDecompress()).pipe(destination);
  } catch (err) {
    printError(err);
  }
};

export default decompressFunction