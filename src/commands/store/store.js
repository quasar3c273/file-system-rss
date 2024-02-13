export const defaultDir = () => process.env.HOME || process.env.USERPROFILE
export let pathNow = defaultDir();
export let setPathNow = (path) => {
  pathNow = path
}