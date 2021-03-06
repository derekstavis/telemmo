const view = require('../views/explore')
const persistence = require('../persistence')
const { playerFromId } = persistence.player

function handler (bot, msg) {
  const player = playerFromId(msg.from.id)
  player.isRegistered()
    .then(() => {
      bot.sendMessage(msg.chat.id, view.message, view.keyboard)
    })
    .catch((e) => {
      console.log(e)
      bot.sendMessage(msg.chat.id, view.error)
    })
}

module.exports = {
  message: /Explore Map .*/,
  handler,
}
