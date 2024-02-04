import { resolve } from 'path'
import { existsSync } from 'fs'
import { pathNow, setPathNow } from "../store/store.js"

export const upPath = async () => setPathNow(resolve(pathNow, '..'))
export const getTargetPath = (pathNow, path) => {
  const targetPath = resolve(pathNow, path)

  return existsSync(targetPath) ? targetPath : null
}