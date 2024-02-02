export function getUserName() {
  const args = process.argv.slice(2);
  const usernameArg = args.find(arg => arg.startsWith('--username='));

  return usernameArg;
}

export default getUserName