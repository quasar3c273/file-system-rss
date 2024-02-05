import { rename } from "fs/promises";
import {getTargetPath} from "../path/upPath.js";
import printError from "../../utils/printError.js";

const rnFunction = async (command) => {
    const newPath = command.trim().replace('rn ', '')
    const from = newPath.split(' ')[0]
    const to = newPath.split(' ')[1]

    const fromFilePath = getTargetPath(from)
    const toFilePath = getTargetPath(to)

    try {
        await rename(fromFilePath, toFilePath);
    } catch (err) {
        printError(err)
    }
};

export default rnFunction