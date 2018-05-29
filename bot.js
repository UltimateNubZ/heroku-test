const Discord ("discord.js")
const bot = new Discord.Client({disableEveryone: true})

bot.on('message', msg => {
  if (msg.content === '!ping') {
    msg.reply('pong');
  }
});

bot.login(process.env.token)
