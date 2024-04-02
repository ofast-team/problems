import type { Problem } from './Problem'
import { doc, setDoc } from 'firebase/firestore'
import { db } from './util'

export async function updateProblems(problems: Problem[]) {
  await Promise.all(
    problems.map((problem) =>
      setDoc(doc(db, 'Problems', problem.problemID), problem, {
        merge: true,
      }),
    ),
  )
}
