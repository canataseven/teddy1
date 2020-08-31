const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('<a:737724884104511499:737724884104511499> Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
  let rol = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(rol => rol.name === args[0]);
  if (!rol) return message.channel.send('<a:737724884104511499:737724884104511499> Herkesten rol alabilmem için bir rol etiketle!')


   const embed = new Discord.RichEmbed()
     .setDescription(`<a:737724884104511499:737724884104511499> Herkesten ${rol} adlı rol alındı!`)
        .setColor(rol.hexColor)


   message.guild.members.forEach(u => {
u.removeRole(rol)
   })
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['toplu-rol-al',"hrolal"],
    permLevel: 3
}

exports.help = {
    name: 'Herkesten Rol Al',
  kategori: "admin",
    description: 'Herkesten rol alır.',
    usage: 'herkesten-rol-al @rol / rol-ismi'
}