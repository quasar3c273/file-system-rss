import { createReadStream } from 'fs';
import { access } from "fs/promises"
import printError from "../../utils/printError.js";
import {getTargetPath} from "../path/upPath.js";
import printPath from "../../utils/printPath.js";
import {pathNow} from "../store/store.js";

// read file command
async function catCommand(command) {
  const newPath = command.trim().replace('cat ', '')
  const targetPath = getTargetPath(newPath)

  try {
    await access(targetPath)

    const readStream = createReadStream(targetPath)

    readStream.on('data', (chunk) => {
      process.stdout.write(chunk);
    })
    readStream.on('end', () => {
      printPath(pathNow);
      readStream.destroy()
    });

    readStream.on('error', (error) => {
      printError(`Error reading file: ${error}`);
      readStream.destroy()
    });
  } catch (err) {
    printError()
  }
}

export default catCommand