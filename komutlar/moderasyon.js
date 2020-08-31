const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setTitle(`<a:737724884104511499:737724884104511499> Teddy Bot Moderasyon Komutları <a:737724884104511499:737724884104511499> `, client.user.avatarURL) 
      .setDescription('**[Botumuzu Sunucuna Davet Etmek İçin Tıkla](https://discordapp.com/oauth2/authorize?client_id=738403449171083335&scope=bot&permissions=8)**')
.setThumbnail(client.user.avatarURL)
      .addField('<a:737724884104511499:737724884104511499> **Özel Oda Sistemi** ➤', '`Açıklamayı Oku`, **Özel Oda Ayarlamak İçin Sunucunuzda (Tıkla Oda Aç) Adında Oda Açıp Odaya Girin. 2 Kişilik Özel Oda Açmak İçin (Tıkla 2 Kişilik Oda Aç) Adında Oda Kurup Odaya Girin.**')
      .addField('<a:737724884104511499:737724884104511499> **Oto Rol Komutu** ➤', '`t!otorol-ayarla`, **Yeni Üyelere Otamatik Verilecek Rolü Ayarlarsınız.**')
      .addField('<a:737724884104511499:737724884104511499> **Seviye Sistemi Komutu ** ➤', '`t!seviye-ayarlar`, **Seviye Sistemini Açarsınız.**')
      .addField('<a:737724884104511499:737724884104511499> **Oy Birliğiyle Kick Komutu ** ➤', '`t!oyla`, **Oyladığınız Kişiyi Sunucudan Atar**')
      .addField('<a:737724884104511499:737724884104511499> **Temizle Komutu** ➤', '`t!temizle`, **Seçtiğiniz Kadar Mesaj Silersiniz.**')
      .addField('<a:737724884104511499:737724884104511499> **Reklam Engelleme Komutu** ➤', '`t!reklam-engelleme`, **Sunucuda Yapılan İzinsiz Reklamları Engellersiniz.**')
      .addField('<a:737724884104511499:737724884104511499> **Küfür Engelleme Komutu** ➤', '`t!küfür-engel`, **Sunucuda Küfür Filtresi Ayarlarsınız.**')
      .addField('<a:737724884104511499:737724884104511499> **Ban Komutu** ➤', '`t!ban`, **Etiketlediğiniz Üyeyi Sunucudan Banlarsınız.**')
      .addField('<a:737724884104511499:737724884104511499> **Ban Listesi Komutu** ➤', '`t!banlist`, **Banladığınız Üyelerin Listesini Görürsünüz.**')
      .addField('<a:737724884104511499:737724884104511499> **Oylama Komutu** ➤'  , '`t!oylama`, **Oylama Başlatırsınız.**')
      .addField('<a:737724884104511499:737724884104511499> **Reboot Komutu** ➤', '`t!reboot`, **Botu Yeniden Başlatırsınız.**')
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
    name: 'moderasyon',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};