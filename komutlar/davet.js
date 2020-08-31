const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`<a:737724884104511499:737724884104511499>${client.user.username} Davet Menüsü <a:737724884104511499:737724884104511499> `)
        .setDescription(`<a:737724884104511499:737724884104511499> **Botun Davet Linki İçin** [TIKLA](https://discordapp.com/oauth2/authorize?client_id=738403449171083335&scope=bot&permissions=8) \n<a:737724884104511499:737724884104511499>**Destek Sunucusu İçin**  [TIKLA](https://discord.gg/d3hxPg8)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}davet Sistemi Kullandı!`, message.author.avatarURL)
    .setColor(`RANDOM`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};
//Lord Creative