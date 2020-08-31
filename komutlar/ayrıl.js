const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (message.author.id !== "662349193180086312") return message.reply('<a:737725682162860054:737725682162860054> Sahibim Sen Değilsin');
   message.channel.send('<a:37725814849929247:737725814849929247> İstediğin Sunucudan Ayrıldım Sahibim');
   message.guild.leave()
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ayrıl'],
  permLevel: 4,
  kategori: "yapımcı"
};

exports.help = {
  name: 'ayrıl',
  description: 'Bot Sunucudan Ayrılır.',
  usage: 'ayrıl'
};