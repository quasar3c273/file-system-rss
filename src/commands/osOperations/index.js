import { EOL, homedir, userInfo, arch } from 'os'

import printInfo from "../../utils/printInfo.js";
import getCPUS from "./getCPUS.js";
import printError from "../../utils/printError.js";
import {ERROR_INPUT} from "../../consts.js";

const getOSInfo = (command) => {
  const attr = command.trim().replace('os ', '')

  switch (attr) {
    case '--EOL':
      printInfo(JSON.stringify(EOL))
      break;
    case '--cpus':
      getCPUS();
      break;
    case '--homedir':
      const homeDirectory = homedir()
      printInfo(homeDirectory)
      break;
    case '--username':
      printInfo(userInfo()?.username)
      break;
    case '--architecture':
      printInfo(arch())
      break;
    default:
      printError(ERROR_INPUT)
      break;
  }
}

export default getOSInfo