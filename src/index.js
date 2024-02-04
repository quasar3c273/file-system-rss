import { homedir } from 'os';

import { getUserName } from "./commands/getUserName.js";
import sayHi from "./utils/sayHi.js";
import printPath from "./utils/printPath.js";
import getConsoleCommand from "./commands/getConsoleCommand.js";
import commandExecution from "./commands/commandExecution.js";
import { pathNow } from "./commands/store/store.js";

let userName

const startProject = () => {
  userName = getUserName()

  sayHi(userName)
  printPath(pathNow)
}

const fileSystem = () => {
  startProject()

  process.stdin.on('data', (chunk) => {
    // const command = getConsoleCommand(chunk.toString())

    commandExecution(chunk.toString())
      .then(() => printPath(pathNow))
  });
}

fileSystem()
