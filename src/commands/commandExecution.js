import {upPath} from "./path/upPath.js"
import {pathNow} from "./store/store.js"
import lsCommand from "./ls.js";
import cdFunction from "./path/cd.js";
import {ERROR_INPUT} from "../consts.js";

const commandExecution = async (inputConsole) => {
  const command = inputConsole.trim().split(' ')[0]

  switch (command) {
    case 'up': {
      await upPath()

      break;
    }
    case 'cd': {
      await cdFunction(inputConsole)

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