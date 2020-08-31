const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setTitle(`<a:737724884104511499:737724884104511499> Teddy Bot Yardım Komutları <a:737724884104511499:737724884104511499> `, client.user.avatarURL) 
      .setDescription('**[Botumuzu Sunucuna Davet Etmek İçin Tıkla](https://discordapp.com/oauth2/authorize?client_id=738403449171083335&scope=bot&permissions=8)**')
.setThumbnail(client.user.avatarURL)
      .addField('<a:737724884104511499:737724884104511499> **Moderasyon Komutları** ➤'  , '`t!moderasyon`, **Moderasyon Komutlarını Açar.**')
      .addField('<a:737724884104511499:737724884104511499> **Kullanıcı Komutları** ➤', '`t!kullanıcı`, **Kullanıcı Komutlarını Açar.**')
      .addField('<a:737724884104511499:737724884104511499> **Sunucu Komutları** ➤', '`t!sunucu-sistemi`, **Sunucu Sistemi Komutlarını Açar.**')
      .addField('<a:737724884104511499:737724884104511499> **Eğlence Komutları** ➤', '`t!eğlence`, **Eğlence Komutlarını Açar.**')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};