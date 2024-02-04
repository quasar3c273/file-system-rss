import {upPath, getTargetPath} from "./path/upPath.js"
import {pathNow, setPathNow} from "./store/store.js"
import lsCommand from "./ls.js";
const ERROR_INPUT = 'Invalid input'
const ERROR_OPERATION = 'Operation failed'

const commandExecution = async ({ command, commandArgs }) => {
  switch (command) {
    case 'up': {
      await upPath()
      break;
    }
    case 'cd': {
      if (commandArgs.length !== 1) throw new Error(ERROR_INPUT)

      const targetPath = getTargetPath(pathNow, commandArgs[0])

      if (targetPath) {
        setPathNow(targetPath)
      } else {
        throw new Error(ERROR_OPERATION);
      }
      break;
    }
    case 'ls': {
      await lsCommand(pathNow)
      break;
    }
    default: {
      throw new Error(ERROR_INPUT);
    }
  }
}

export default commandExecution