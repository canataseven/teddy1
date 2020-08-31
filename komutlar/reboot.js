const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
message.channel.sendMessage(' <a:737724884104511499:737724884104511499>  **Botun Yeniden Başlatılmasını Onaylıyor Musun ?** <a:737724884104511499:737724884104511499> ')
.then(() => {
  message.channel.awaitMessages(response => response.content === "evet", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage('<a:737724884104511499:737724884104511499> **Yeniden Başlıyorum** <a:737724884104511499:737724884104511499>    ').then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] <a:737724884104511499:737724884104511499> **Bot Yeniden Başlatılıyor** <a:737724884104511499:737724884104511499>`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage(' `<a:737724884104511499:737724884104511499> Yeniden Başlama İşlemini İptal Ettim` ');
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yenile','yb'],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: '[YAPIMCI]',
  usage: 'reboot'
};