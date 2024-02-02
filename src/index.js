import { homedir } from 'os';

import getUserName from "./commands/getUserName.js";

let userName

const startProject = () => {
  userName = getUserName()
  const pwd = homedir();
  console.log('userName', userName)
  // console.log('pwd', pwd)
  // console.log('process.argv', process.argv)
}

startProject()
