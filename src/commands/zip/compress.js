import {createReadStream, createWriteStream} from 'fs';
import { createBrotliCompress } from 'zlib';
import {getTargetPath} from "../path/upPath.js";
import {basename, join} from "path";
import {access} from "fs/promises";
import printError from "../../utils/printError.js";

const compressFunction = async (inputConsole) => {
  const newPath = inputConsole.trim().replace('compress ', '')
  const [from, to] = newPath.split(' ');

  const sourceFilePath = getTargetPath(from);
  const destinationFolderPath = getTargetPath(to);

  const fileName = basename(sourceFilePath);
  const destinationFilePath = join(destinationFolderPath, `${fileName}.br`);

  try {
    await access(sourceFilePath);

    const source = createReadStream(sourceFilePath);
    const destination = createWriteStream(destinationFilePath);

    source.pipe(createBrotliCompress()).pipe(destination);
  } catch (err) {
    printError(err);
  }
}

export default compressFunction