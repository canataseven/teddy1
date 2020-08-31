const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('<a:737724884104511499:737724884104511499> Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
   let rol = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(rol => rol.name === args[0]);
  if (!rol) return message.channel.send('<a:737724884104511499:737724884104511499> Herkese rol verebilmem için bir rol etiketlemelisin.')


   const embed = new Discord.RichEmbed()
     .setDescription(`<a:737724884104511499:737724884104511499> Herkese ${rol} adlı rol verildi!`)
        .setColor(rol.hexColor)
   const ver = new Discord.RichEmbed()
   .setDescription('Bir kullanıcıya ``' + rol.name + '`` adlı rol verildi!')
   .setColor(rol.hexColor)

   message.guild.members.forEach(u => {
u.addRole(rol)
})
  // message.channel.send('Herkese **'+ rol.name +'** adlı rol verildi!')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['toplu-rol-ver',"hrolver"],
    permLevel: 3
}

exports.help = {
    name: 'Herkese Rol Ver',
  kategori: "admin",
    description: 'Herkese rol verir.',
    usage: 'herkese-rol-ver @rol / rol-ismi'
}