import { homedir } from 'os';

import { getUserName } from "./commands/getUserName.js";
import sayHi from "./utils/sayHi.js";
import printPath from "./utils/printPath.js";
import getConsoleCommand from "./commands/getConsoleCommand.js";

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

    console.log('command', command)
    console.log('commandArgs', commandArgs)
  });
}

fileSystem()
