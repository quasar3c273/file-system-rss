import {access} from "fs/promises"
import {basename, join} from 'path'
import {getTargetPath} from "../path/upPath.js"
import {createReadStream, createWriteStream, unlink} from 'fs'
import printError from "../../utils/printError.js"

const mvFunction = async (command) => {
    const newPath = command.trim().replace('mv ', '')
    const from = newPath.split(' ')[0]
    const to = newPath.split(' ')[1]

    const fromFilePath = getTargetPath(from)
    const fileName = basename(fromFilePath)
    const toFolderPath = getTargetPath(to)
    const toFilePath = join(`${toFolderPath}`, `${fileName}`)

    try {
        await access(fromFilePath)

        const readStream = createReadStream(fromFilePath)
        const writeStream = createWriteStream(toFilePath)

        readStream.pipe(writeStream)

        readStream.on('end', () => {
            unlink(fromFilePath, (err) => {
                if (err) printError(err)
            });
        });
    } catch (err) {
        printError(err)
    }
};

export default mvFunction