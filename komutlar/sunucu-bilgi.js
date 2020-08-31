const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(' Uyarı ', '`sunucubilgi` Adlı Komutu Özel Mesajlarda Kullanamazsın!')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor("#15f153")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('<a:739589662120738836:739589662120738836> Sunucu Adı:', message.guild.nam)
    .addField('<a:739589662120738836:739589662120738836> Sunucu ID:', message.guild.id)
    .addField('<a:739589662120738836:739589662120738836> Kanal Sayısı:', message.guild.channels.size)
    .addField('<a:739589662120738836:739589662120738836> Sunucu Bölgesi:', message.guild.region)
    .addField('<a:739589662120738836:739589662120738836> Üye Sayısı:', message.guild.memberCount)
    .addField('<a:739589662120738836:739589662120738836> Sunucu Sahibi:', message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField('<a:739589662120738836:739589662120738836> Oluşturulma Tarihi:', message.guild.createdAt)
    .setThumbnail(message.guild.iconURL);
    return message.channel.sendEmbed(sunucubilgi);
    }
    message.react("👑")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu', 'sunucu bilgi', 'sbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sunucubilgi'
};
//Lord Creative