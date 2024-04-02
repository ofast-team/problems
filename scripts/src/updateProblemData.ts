import type { ProblemData } from './ProblemData'
import { doc, setDoc } from 'firebase/firestore'
import { db } from './util'

export async function updateProblemData(problemData: ProblemData[]) {
  await Promise.all(
    problemData.map((data) =>
      setDoc(doc(db, `Problems/${data.problemID}/data/${data.testID}`), data)
        .then(() => {
          console.log(
            'Document successfully written!',
            data.problemID,
            data.testID
          )
        })
        .catch((error) => {
          console.error(
            'Error adding document: ',
            error,
            data.problemID,
            data.testID
          )
        })
    )
  )
}
