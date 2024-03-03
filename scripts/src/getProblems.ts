import * as fs from 'fs'
import { head } from './head'
import type { Problem } from './Problem'

export default function getProblems() {
  const dirs = fs.readdirSync(head, { withFileTypes: true })

  const problems: Problem[] = []

  dirs.forEach((dir) => {
    if (!dir.isDirectory() || dir.name === '.git' || dir.name == 'scripts')
      return

    const buf = fs.readFileSync(`${head}/${dir.name}/problem.json`)
    const problem = JSON.parse(buf.toString())
    problems.push(problem)
  })

  return problems
}
