const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('RANDOM')
    .setTimestamp()
    .addField('** <a:737724884104511499:737724884104511499> Yapımcım : ** ', ' <@662349193180086312> <a:739589662120738836:739589662120738836>')
    .setDescription('**[Botumuzu Sunucuna Davet Etmek İçin Tıkla](https://discordapp.com/oauth2/authorize?client_id=738403449171083335&scope=bot&permissions=8)**')
    .setThumbnail(client.user.avatarURL)
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcım'],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: 'Yapimcimi Gosterir.',
  usage: 'yapimcim'
};




