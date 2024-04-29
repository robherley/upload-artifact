import log from 'why-is-node-running'
import * as core from '@actions/core'
import {run} from './upload-artifact'

const main = async () => {
  const interval = setInterval(() => {
    log()
  }, 5000)

  try {
    await run()
  } catch (error) {
    core.setFailed((error as Error).message)
  } finally {
    clearInterval(interval)
  }
}

main()
