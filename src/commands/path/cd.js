import {stat, access} from 'fs/promises'

import {setPathNow} from "../store/store.js";
import {ERROR_OPERATION} from "../../consts.js";
import {getTargetPath} from "./upPath.js";

const cdFunction = async (command) => {
  const newPath = command.trim().replace('cd ', '')
  const targetPath = getTargetPath(newPath)

  try {
    const stats = await stat(targetPath)
    if (stats.isFile()) console.log(ERROR_OPERATION)

    await access(targetPath)
    await setPathNow(targetPath)
  } catch (err) {
    console.error(ERROR_OPERATION)
  }
}

export default cdFunction