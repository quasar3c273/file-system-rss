import { getUserName } from "./commands/getUserName.js";
import sayHi from "./utils/sayHi.js";
import printPath from "./utils/printPath.js";
import commandExecution from "./commands/commandExecution.js";
import { pathNow } from "./commands/store/store.js";
import printInfo from "./utils/printInfo.js";

let userName

const startProject = () => {
  userName = getUserName()

  sayHi(userName)
  printPath(pathNow)
}

export const finishFunction = () => {
  printInfo(`Thank you for using File Manager, ${userName}, goodbye!`)
  process.exit(0)
}

const fileSystem = () => {
  startProject()

  process.stdin.on('data', (chunk) => {
    commandExecution(chunk.toString())
      .then(() => printPath(pathNow))
  });
}

fileSystem()
