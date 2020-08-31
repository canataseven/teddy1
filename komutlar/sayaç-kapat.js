const Discord = require('discord.js'),
      db = require('quick.db'),
      ayarlar = require('../ayarlar.json'),
      prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
  
let frenzysayı = await db.fetch(`FrenzyCode+SayaçSayı_${message.guild.id}`)  
let frenzykanal = await db.fetch(`FrenzyCode+SayaçKanal_${message.guild.id}`)  
 
if(!frenzysayı && !frenzykanal) return message.reply(`<a:737724884104511499:737724884104511499> Sayaç Sistemi Zaten Ayarlı Değil! **Ayarlamak İçin** : \`${prefix}sayaç #kanal 100\``)
db.delete(`FrenzyCode+SayaçSayı_${message.guild.id}`) 
db.delete(`FrenzyCode+SayaçKanal_${message.guild.id}`) 
message.reply(`<a:737724884104511499:737724884104511499> Sayaç Başarıyla Kapatıldı!`)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: 'sayaç-kapat',
  description: 'Sayaç Sistemi - Frenzy Code',
  usage: 'sayaç-kapat'
};
//Lord Creative