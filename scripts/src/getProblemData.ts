import path from 'path'
import * as fs from 'fs'
import type { ProblemData } from './ProblemData'
import { head } from './head'
import isProblemDir from './isProblemDir'
import { compress } from 'lzutf8'

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
    uniqueNames.forEach((name) => {
      const inputBuf = fs.readFileSync(`${head}/${dir.name}/data/${name}.in`)
      const input = inputBuf.toString()
      const compressedInput = compress(input, { outputEncoding: 'Base64' })

      const outputBuf = fs.readFileSync(`${head}/${dir.name}/data/${name}.out`)
      const output = outputBuf.toString()
      const compressedOutput = compress(output, { outputEncoding: 'Base64' })

      problemData.push({
        problemID: problem.problemID,
        testID: name,
        input: compressedInput,
        output: compressedOutput,
      })
    })
  })

  return problemData
}
