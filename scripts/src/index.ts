import getProblems from './getProblems'
import getProblemData from './getProblemData'

const problems = getProblems()
const problemData = getProblemData()

import { updateProblems } from './updateProblems'
import { updateProblemData } from './updateProblemData'

updateProblems(problems)
updateProblemData(problemData)
