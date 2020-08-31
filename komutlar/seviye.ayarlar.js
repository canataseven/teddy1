const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  
 let hm = await db.fetch(`seviyeacik_${message.guild.id}`)
  let kanal = await db.fetch(`svlog_${message.guild.id}`)
  let xp = await db.fetch(`verilecekxp_${message.guild.id}`)
  let seviyerol = await db.fetch(`svrol_${message.guild.id}`)
  let rollvl = await db.fetch(`rollevel_${message.guild.id}`)
  
   let kontrol;
  if(kanal == null) kontrol = ':x:'
  else kontrol = '<a:739589662120738836:739589662120738836>  '+ kanal
  
  let kontrol2;
  if(xp == null) kontrol2 = '4 (Varsayılan)'
  else kontrol2 = '<a:739589662120738836:739589662120738836> '+ xp
  
  let kontrol3;
  if(seviyerol == null) kontrol3 = ':x:'
  else kontrol3 = '<a:739589662120738836:739589662120738836> '+ seviyerol
  
  let kontrol4;
  if(rollvl == null) kontrol4 = ':x:'
  else kontrol4 = '<a:739589662120738836:739589662120738836> '+rollvl
  if(!hm) return message.channel.send('<a:739589662120738836:739589662120738836> Seviye sistemi bu sunucuda aktif durumda değil! \n Bunu mu arıyorsun? `t!seviye-aç`')
  let ayarlar = new Discord.RichEmbed()
  .setTitle('Sunucu Seviye Ayarları:')
  .setDescription( message.guild.name + ' Sunucusunun seviye ayarları!')
  .addField('Göstergeler', '<a:739589662120738836:739589662120738836> : **Aktif** \n :x: : **Devre Dışı**')
  .addBlankField()
  .addField('<a:739589662120738836:739589662120738836> Seviye Logs Kanalı:', kontrol, true)
  .addField('<a:739589662120738836:739589662120738836> Mesaj Başı Verilecek XP:', kontrol2, true)
  .addField('<a:739589662120738836:739589662120738836> Seviye Rol', kontrol3, true)
  .addField('<a:739589662120738836:739589662120738836> Seviye Rol Leveli:', kontrol4, true)
  message.channel.send(ayarlar)
 

 };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'seviye-ayarlar',
  description: 'taslak', 
  usage: 'seviye-ayarlar'
};