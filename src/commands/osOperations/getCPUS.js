import { cpus } from 'os';

const getCPUS = () => {
  const cpuInfo = cpus().map((cpu) => ({
    Model: cpu.model,
    Speed: `${(cpu.speed / 1000)} GHz`
  }))
  console.table(cpuInfo)
}

export default getCPUS