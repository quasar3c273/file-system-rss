import {upPath} from "./path/upPath.js"
import {pathNow} from "./store/store.js"
import lsCommand from "./ls.js";
import cdFunction from "./path/cd.js";
import {ERROR_INPUT} from "../consts.js";
import catCommand from "./operationsWithFiles/cat.js";
import create from "./operationsWithFiles/add.js";
import rnFunction from "./operationsWithFiles/rn.js";
import cpFunction from "./operationsWithFiles/cp.js";
import mvFunction from "./operationsWithFiles/mv.js";
import rmFunction from "./operationsWithFiles/rm.js";
import getOSInfo from "./osOperations/index.js";
import printError from "../utils/printError.js";
import calculateHash from "./hash/calcHash.js";

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
    case 'cat': {
      await catCommand(inputConsole)
      break;
    }
    case 'add': {
      await create(inputConsole);
      break;
    }
    case 'rn':
      await rnFunction(inputConsole);
      break;
    case 'cp':
      await cpFunction(inputConsole);
      break;
    case 'mv':
      await mvFunction(inputConsole);
      break;
    case 'rm':
      await rmFunction(inputConsole);
      break;
    // Operating system
    case 'os':
      await getOSInfo(inputConsole);
      break;
    // hash
    case 'hash':
      await calculateHash(inputConsole);
      break;
    default: {
      printError(ERROR_INPUT)
    }
  }
}

export default commandExecution