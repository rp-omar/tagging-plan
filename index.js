const { readFile, writeFile } = require('fs')

function formatEventKey(eventName) {
  return eventName
    .trim()
    .replace(/ /g, '_')
    .replace(/[^a-zA-Z0-9_]/g, '')
    .toUpperCase()
}

readFile('./data.csv', 'utf8', (err, data) => {
  if (err) {
    console.log('#################')
    console.error(
      "Couldn't find file data.csv\nPlease make sure to have the csv file in the root folder and name it data.csv"
    )
    console.log('#################')
    return
  }
  const events = data.split('\n')
  const classificationIndex = events[0].split(',').indexOf('Classification')
  const eventNameIndex = events[0].split(',').indexOf('Event Name')

  const dataLines = events
    .slice(1)
    .filter((line) => line.split(',')[classificationIndex] === 'WebApp')
    .map((line) => line.split(',')[eventNameIndex])
    .reduce((acc, event) => {
      acc[formatEventKey(event)] = event
      return acc
    }, {})

  const content = 'export const EVENTS = ' + JSON.stringify(dataLines, null, 2)

  writeFile('./events.js', content, (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('Events generated')
  })
})
