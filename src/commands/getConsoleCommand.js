const getConsoleCommand = (input) => {
  const command = input.trim().split(' ')[0]

  return command
}

export default getConsoleCommand