/**
 * This script copies src/client/assets/index.html into dist/index.html
 * This is useful for our built production code.
 */

const colors = require('colors')
const cheerio = require('cheerio')
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))
const _ = require('lodash')

const readCss = fs.readdirAsync('dist/css')
const readJs = fs.readdirAsync('dist/js')
const readManifest = fs.readFileAsync('dist/chunk-manifest.json')

Promise.all([readCss, readJs, readManifest]).then(([cssFiles, jsFiles, manifestFile]) => {
  // Get the vendor and app bundle file names
  const jsFilesNoMap = jsFiles.filter(fileName => !fileName.includes('.map'))
  const appJs = jsFilesNoMap.find(fileName => fileName.includes('application'))
  const vendorJs = jsFilesNoMap.find(fileName => fileName.includes('vendor'))
  const manifestJs = jsFilesNoMap.find(fileName => fileName.includes('manifest'))
  // Get the CSS file
  const cssFilesNoMap = cssFiles.filter(fileName => !fileName.includes('.map'))
  const appCss = cssFilesNoMap.find(fileName => fileName.includes('app'))  

  // Load the index.html
  fs.readFileAsync('src/index.html', 'utf8').then((markup) => {
    // Replace everything in the replace tags
    markup = markup.replace(/<!--REMOVE-PROD-START-->[\s\S]*?<!--REMOVE-PROD-END-->/, '')

    const $ = cheerio.load(markup)
    // Add the app css
    $('head').append(`<link rel="stylesheet" href="/css/${appCss}">\n`)
    // Add the vendor and app scripts
    $('body').append(`<script src="/js/${manifestJs}"></script>\n`)
    $('body').append(`<script src="/js/${vendorJs}"></script>\n`)
    $('body').append(`<script src="/js/${appJs}"></script>\n`)
    // Add the manifest
    $('head').append(`
      <script>
        //<![CDATA[
        window.webpackManifest = ${manifestFile}
        //]]>
      </script>\n`)

    fs.writeFileAsync('dist/index.html', $.html(), 'utf8')
    .catch(console.error)

    console.log('index.html written to /dist'.green)
  }).catch(console.error)
}).catch(console.error)
