const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setTitle(`<a:737724884104511499:737724884104511499> Teddy Bot Eğlence Komutları <a:737724884104511499:737724884104511499> `, client.user.avatarURL) 
      .setDescription('**[Botumuzu Sunucuna Davet Etmek İçin Tıkla](https://discordapp.com/oauth2/authorize?client_id=738403449171083335&scope=bot&permissions=8)**')
.setThumbnail(client.user.avatarURL)
      .addField('<a:737724884104511499:737724884104511499> **Aşk Ölçer Komutu** ➤'  , '`t!aşkölçer`, **Sevdiğiniz Kişi İle Aşkınızı Ölçersiniz.**')
      .addField('<a:737724884104511499:737724884104511499> **Fake Mesaj Komutu** ➤', '`t!fakemesaj`, **Başkası Adına Fake Mesaj Yazarsınız.**')
      .addField('<a:737724884104511499:737724884104511499> **Hava Durumu Komutu** ➤', '`t!havadurumu`, **Bulunduğunuz Şehrin Hava Durumunu Öğrenirsiniz.**')
      .addField('<a:737724884104511499:737724884104511499> **Söv Komutu** ➤', '`t!söv`, **Etiketlediğiniz Kişiye Botun Sövmesini Sağlarsınız.**')
      .addField('<a:737724884104511499:737724884104511499> **Evlenme Teklifi Komutu** ➤', '`t!evlen`, **Etiketlediğiniz Kişiye Evlenme Teklifi Edersiniz.**')
      .addField('<a:737724884104511499:737724884104511499> **Soru Sorma Komutu** ➤', '`t!sor`, **Bota Soru Sararsınız.**')
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
    name: 'eğlence',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};