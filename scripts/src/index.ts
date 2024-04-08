import getProblems from './getProblems'
import getProblemData from './getProblemData'

const problems = getProblems()
const problemData = getProblemData()

import { updateProblems } from './updateProblems'
import { updateProblemData } from './updateProblemData'

updateProblems(problems)
  .then(() => {
    console.log('Problems updated')
  })
  .catch((error) => {
    console.error('Failed to update problems:', error)
  })

updateProblemData(problemData)
  .then(() => {
    console.log('Problem data updated')
  })
  .catch((error) => {
    console.error('Failed to update problem data:', error)
  })
