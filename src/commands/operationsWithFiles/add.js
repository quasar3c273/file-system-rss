import fs from "fs/promises";
import {getTargetPath} from "../path/upPath.js";
import printError from "../../utils/printError.js";

const create = async (command) => {
    const newPath = command.trim().replace('add ', '')
    const filePath = getTargetPath(newPath)

    try {
        if (filePath) await fs.writeFile(filePath, '', { flag: 'wx'})
    } catch (err) {
        printError(`Error reading file: ${err}`)
    }
};

export default create