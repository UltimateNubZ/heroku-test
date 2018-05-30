const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
        if(!bUser) return message.channel.send("Can't find user!")
        let bReason = args.slice(1).join(" ");
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have permission")
        if (bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("That person can't be banned!")

        let banEmbed = new Discord.RichEmbed()
        .setDescription("~Ban~")
        .setColor("#0bc0000")
       .addField("banned User", `${bUser} with ID ${bUser.id}`)
        .addField("banned by", `${message.author} with ID ${message.author.id}`)
        .addField("banned In", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", bReason);

        let banChannel = message.guild.channels.find(`name`, "incidents")
        if(!banChannel) return message.channel.send("Can't find incidents channel.")

        message.guild.member(bUser).ban(bReason)
        banChannel.send(banEmbed)
        return
   
}

module.exports.help = {
    name: "ban"
}
