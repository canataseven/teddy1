const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setTitle(`<a:737724884104511499:737724884104511499> Teddy Bot Kullanıcı Komutları <a:737724884104511499:737724884104511499> `, client.user.avatarURL) 
      .setDescription('**[Botumuzu Sunucuna Davet Etmek İçin Tıkla](https://discordapp.com/oauth2/authorize?client_id=738403449171083335&scope=bot&permissions=8)**')
.setThumbnail(client.user.avatarURL)
      .addField('<a:737724884104511499:737724884104511499> **Ping Komutu** ➤'  , '`t!ping`, **Botun Pingini Gösterir.**')
      .addField('<a:737724884104511499:737724884104511499> **PP Avatar Komutu** ➤', '`t!avatar`, **Profil Resminizi Gösterir.**')
      .addField('<a:737724884104511499:737724884104511499> **Yazma Komutu** ➤', '`t!yaz`, **Bota İstediğiniz Şeyi Yazdırırsınız.**')
      .addField('<a:737724884104511499:737724884104511499> **Kullanıcı Bilgim Komutu** ➤', '`t!kullanıcıbilgim`, **Bilgilerinizi Gösterir.**')
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
    name: 'kullanıcı',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};