import { access } from "fs/promises";
import {basename, join} from 'path';
import {getTargetPath} from "../path/upPath.js";
import { createReadStream, createWriteStream } from 'fs';
import printError from "../../utils/printError.js";
import {ERROR_INPUT} from "../../consts.js";

const cpFunction = async (command) => {
    const newPath = command.trim().replace('cp ', '')
    const from = newPath.split(' ')[0]
    const to = newPath.split(' ')[1]

    if (!from || !to) {
        printError(ERROR_INPUT)
        return
    }

    const fromFilePath = getTargetPath(from)
    const fileName = basename(fromFilePath)
    const toFolderPath = getTargetPath(to)
    const toFilePath = join(`${toFolderPath}`, `${fileName}`)

    try {
        await access(fromFilePath)

        const readStream = createReadStream(fromFilePath)
        const writeStream = createWriteStream(toFilePath)

        readStream.pipe(writeStream)
    } catch (err) {
        printError(err)
    }
};

export default cpFunction