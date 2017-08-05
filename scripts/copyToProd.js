const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs-extra'))
const rimrafAsync = Promise.promisify(require('rimraf'))

const repoName = 'zuper-frontend-production'

/*********************************************************

This script will copy the dist to the prod repo.

What it does:
1. Copies the dist to the 'zuper-frontend-production' folder.
   This repo must be located at '../zuper-frontend-production'
   
*********************************************************/

const removeExisting = () => rimrafAsync(`../${repoName}/frontend`)

const copyDist = () => {
  const desintation = `../${repoName}/frontend`
  console.log(`Copying dist to '${repoName}'`)
  // Create the destination folder if it doesn't exist
  if (!fs.existsSync(desintation)) {
    fs.mkdirSync(desintation)
  }
  return fs.copyAsync('./dist', desintation)
}

// Go time
removeExisting()
.then(copyDist)
.then(() => console.log('Copy complete'))
.catch(console.error)
