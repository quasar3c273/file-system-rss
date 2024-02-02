export function getUserName() {
  const KEY_USERNAME = '--username='

  const args = process.argv.slice(2);
  const usernameArg = args?.find(arg => arg.startsWith(KEY_USERNAME));
  const name = usernameArg?.substring(KEY_USERNAME.length) || 'Anonymous';

  return name;
}
