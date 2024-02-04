import fs from 'fs'
import path from 'path'
import printError from "../utils/printError.js";

async function lsCommand(directoryPath) {
  try {
    const files = await fs.promises.readdir(directoryPath);
    const tableData = [];
    const folders = [];
    const filesList = [];

    for (const file of files) {
      const stats = await fs.promises.lstat(path.join(directoryPath, file));
      const type = stats.isDirectory() ? 'directory' : 'file';
      if (type === 'directory') {
        folders.push({Name: file, Type: type});
      } else {
        filesList.push({Name: file, Type: type});
      }
    }

    folders.sort((a, b) => a.Name.localeCompare(b.Name));
    filesList.sort((a, b) => a.Name.localeCompare(b.Name));

    tableData.push(...folders, ...filesList);

    console.table(tableData);
  } catch (error) {
    printError(`Error reading directory: ${error}`)
  }
}

export default lsCommand