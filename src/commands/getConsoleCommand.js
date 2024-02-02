const getConsoleCommand = (input) => {
  const inputTrim = input.trim().split(/\s+/)
  const command = inputTrim[0]
  const commandArgs = inputTrim.slice(1)

  return { command, commandArgs }
}

export default getConsoleCommand