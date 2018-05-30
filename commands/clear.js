const Discord = require("discord.js")


module.exports.run = async (bot, message, args) =>{
let clearChannel = message.guild.channels.find(`name`, "incidents")

    
let clearEmbed = new Discord.RichEmbed()
.setDescription ("Clear")
.setColor("#285fb7")  
.addField("Cleared by", `${message.author} with ID: ${message.author.id}`)
.addField("Time:", message.createdAt)
.addField("Channel:", message.channel)
.addField("Cleared ammount of messages:", `${args[0]}`)

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Permissions m8")
    if(!args[0]) return message.channel.send("00f")
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Cleared ${args[0]} messages`).then(msg => msg.delete(5000))
        clearChannel.send(clearEmbed)
        
       })
}

module.exports.help = {
    name: "clear"
}
