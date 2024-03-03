import { namesToIgnore } from './namesToIgnore'
import type { Dirent } from 'fs'

export default function isProblemDir(dir: Dirent) {
  return dir.isDirectory() && !namesToIgnore.includes(dir.name)
}
