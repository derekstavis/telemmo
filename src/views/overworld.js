const emoji = require('node-emoji')
const keyboard = require('./keyboards/overworld')

module.exports = {
  keyboard: Object.assign({}, keyboard, { parse_mode: 'markdown' }),
  message: emoji.emojify(`
:globe_with_meridians: Welcome to the overworld! :globe_with_meridians:

\`Dev notes:\`
:no_entry_sign: = Not implemented yet :(

Check the subreddit for information or feedback: https://www.reddit.com/r/telemmo

Chat group: https://telegram.me/telemmo
  `.trim()),
  error: `You don't have a character, create one at /start`
}
