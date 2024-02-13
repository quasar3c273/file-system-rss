import { unlink } from 'fs/promises'

import {getTargetPath} from "../path/upPath.js"
import printError from "../../utils/printError.js"

const rmFunction = async (command) => {
    const newPath = command.trim().replace('rm ', '')
    const fromFilePath = getTargetPath(newPath)

    try {
        await unlink(fromFilePath)
    } catch (err) {
        printError(err)
    }
};

export default rmFunction