import getProblems from './getProblems'
import getProblemData from './getProblemData'

const problems = getProblems()
const problemData = getProblemData()

import axios from 'axios'
import buildPath from './path'

axios
  .post(buildPath('/updateProblems'), problems, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((response) => {
    console.log('Response from the API:', response.data)
  })
  .catch((error) => {
    console.error('Error making API request:', error)
  })

axios
  .post(buildPath('/updateProblemData'), problemData, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  .then((response) => {
    console.log('Response from the API:', response.data)
  })
  .catch((error) => {
    console.error('Error making API request:', error)
  })
