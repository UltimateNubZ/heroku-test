const config = require ("./config.json")
const Discord = require ("discord.js")
const fs = require("fs")
const ms = require("ms")
const bot = new Discord.Client({disableEveryone: true})
bot.commands = new Discord.Collection()

let prefix = config.prefix

bot.on('message', msg => {
  if (msg.content === '!ping') {
    msg.reply('pong');
  }
});

bot.on('guildMemberAdd', member => {
  addRole()
  const channel = member.guild.channels.find('name', 'hello');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

bot.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'bye');
  if (!channel) return;
  channel.send(`Bye Bye, ${member}`);
});


fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)
  
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("Couldn't find commands.");
      return;
    }
  
    jsfile.forEach((f, i) =>{
      let props = require(`./commands/${f}`);
      console.log(`${f} loaded!`);
      bot.commands.set(props.help.name, props);
    });
  
  });




bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
    bot.user.setActivity("UltimateNubZ", {type: "Watching"})
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return

    let prefix = config.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray [0]
    let args = messageArray.slice(1)

    let commandfile = bot.commands.get(cmd.slice(prefix.length))
    if(commandfile) commandfile.run(bot,message,args)
    
    
})
bot.login(proccess.env.BOT_TOKEN)

console.log("Reminders: Host bot on Heroku or glitch.com")
