import crypto from 'crypto'
import fs from 'fs'

import {getTargetPath} from "../path/upPath.js"
import printError from "../../utils/printError.js"

const calculateHash = async (inputConsole) => {
    const file = inputConsole.trim().replace('hash ', '')
    const filePath = getTargetPath(file)
    const hash = crypto.createHash('sha256')

    try {
        const input = fs.createReadStream(filePath)

        input.on('readable', () => {
            const data = input.read()

            if (data)
                hash.update(data)
            else {
                console.log(hash.digest('hex'))
                input.destroy()
            }
        });

        input.on('error', (err) => {
            printError(err)
        });
    } catch (err) {
        printError(`Error in calculateHash function`)
    }
};

export default calculateHash