import {ERROR_OPERATION} from "../consts.js";

const printError = (errorDescription) => {
  console.error(errorDescription || ERROR_OPERATION)
}

export default printError