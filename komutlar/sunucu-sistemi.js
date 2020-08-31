const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setTitle(`<a:737724884104511499:737724884104511499> Teddy Bot Sunucu Sistemi Komutları <a:737724884104511499:737724884104511499> `, client.user.avatarURL) 
      .setDescription('**[Botumuzu Sunucuna Davet Etmek İçin Tıkla](https://discordapp.com/oauth2/authorize?client_id=738403449171083335&scope=bot&permissions=8)**')
.setThumbnail(client.user.avatarURL)
      .addField('<a:737724884104511499:737724884104511499> **Sunucu Kurma Komutu** ➤'  , '`t!sunucu-kur`, **Otomatik Sunucu Kurar.**')
      .addField('<a:737724884104511499:737724884104511499> **Davet Takip Komutu** ➤', '`t!davet-takip`, **Sunucuda Kimin Kaç Davet Yaptığını Görürsünüz.**')
      .addField('<a:737724884104511499:737724884104511499> **Resimli Yazı Komutu** ➤', '`t!resimliyazı`, **Resimli Yazı Atar.**')
      .addField('<a:737724884104511499:737724884104511499> **Herkese Rol Verme Komutu** ➤', '`t!toplu-rol-ver`, **Seçtiğiniz Rolü Herkese Verir.**')
      .addField('<a:737724884104511499:737724884104511499> **Herkesten Rol Alma Komutu** ➤', '`t!toplu-rol-al`, **Seçtiğiniz Rolü Herkesten Alır.**')
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
    name: 'sunucu-sistemi',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};