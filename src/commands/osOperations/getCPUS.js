import { cpus } from 'os';

const getCPUS = () => {
  const cpuInfo = cpus().map((cpu, index) => ({
    Index: ++index,
    Model: cpu.model,
    Speed: `${(cpu.speed / 1000)} GHz`
  }))
  console.table(cpuInfo)
}

export default getCPUS