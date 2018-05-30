const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let hembed = new Discord.RichEmbed()
    
    .setTitle("Help")
    .addField("Tempmute", "just a simple moderation command (requires channel called incidents)")
    .addField("Serverinfo", "incase you want newcomers to know about your server")
    .addField("ban", "to permanantly ban someone from your server (requires channel called incidents)")
    .addField("botinfo", "just incase you want other people to know about our bot ")
    .addField("clear", "just a simple method to stop spam along with the temp mute command (requires channel called incidents)")
    .addField("report", "just so the owner know any problem occouring (requires channel called incidents)")
    .addField("kick", "to kick anyone who anoys you too much(requires channel called incidents)")
    .addField("warn", "to warn people  (requires channel called incident)")
    .addField("Warn level", "To show who has how many warns")
    .addField("add/remove role")
    .addField("doggo", "to see pictures of cute dogs")
    .addField("Color", "To add color to peoples roles")
    .addField("Colors", "To see options towards Color (ps: if you want to add colors you have to start it with # and give it your personal color and personal name)")
    .setColor("#ce1f0c")


    message.channel.send(hembed)
}

module.exports.help = {
    name: "help"
}
