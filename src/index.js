import { homedir } from 'os';

import { getUserName } from "./commands/getUserName.js";
import sayHi from "./utils/sayHi.js";
import printPath from "./utils/printPath.js";

let userName

const startProject = () => {
  userName = getUserName()

  sayHi(userName)
  printPath(homedir())
}

startProject()
