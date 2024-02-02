import { homedir } from 'os';

import { getUserName } from "./commands/getUserName.js";
import sayHi from "./utils/sayHi.js";
import printPath from "./utils/printPath.js";
import getConsoleCommand from "./commands/getConsoleCommand.js";
import commandExecution from "./commands/commandExecution.js";

let userName
let pathNow

const startProject = () => {
  userName = getUserName()
  pathNow = homedir()

  sayHi(userName)
  printPath(pathNow)
}

const fileSystem = () => {
  startProject()

  process.stdin.on('data', (chunk) => {
    const { command, commandArgs } = getConsoleCommand(chunk.toString())

    commandExecution({commandName: command, argsArray: commandArgs})
      .then(r => console.log('r', r))
  });
}

fileSystem()
