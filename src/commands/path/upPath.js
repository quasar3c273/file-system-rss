import { resolve, join, isAbsolute } from 'path'
import { pathNow, setPathNow } from "../store/store.js"

export const upPath = async () => setPathNow(resolve(pathNow, '..'))
export const getTargetPath = (newPath) => {
  return isAbsolute(newPath) ? newPath : join(pathNow, `${newPath}`)
}