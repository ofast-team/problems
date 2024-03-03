import path from 'path'
import * as fs from 'fs'
import type { ProblemData } from './ProblemData'
import { head } from './head'
import isProblemDir from './isProblemDir'

export default function getProblemData() {
  const dirs = fs.readdirSync(head, { withFileTypes: true })

  const problemData: ProblemData[] = []

  dirs.forEach((dir) => {
    if (!isProblemDir(dir)) return

    const problemBuf = fs.readFileSync(`${head}/${dir.name}/problem.json`)
    const problem = JSON.parse(problemBuf.toString())

    const dataFileNames = fs.readdirSync(`${head}/${dir.name}/data`)
    const dataFileCases = dataFileNames.map((name) => path.parse(name).name)
    const uniqueNames = [...new Set(dataFileCases)]
    const data = uniqueNames.map((name) => {
      const inputBuf = fs.readFileSync(`${head}/${dir.name}/data/${name}.in`)
      const input = inputBuf.toString()

      const outputBuf = fs.readFileSync(`${head}/${dir.name}/data/${name}.out`)
      const output = outputBuf.toString()

      return {
        input,
        output,
      }
    })

    problemData.push({
      problemID: problem.problemID,
      data,
    })
  })

  return problemData
}
