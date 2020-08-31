const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 

 let hm = await db.fetch(`seviyeacik_${message.guild.id}`)
  let kanal = await db.fetch(`svlog_${message.guild.id}`)
  let xp = await db.fetch(`verilecekxp_${message.guild.id}`)
  let seviyerol = await db.fetch(`svrol_${message.guild.id}`)
  let rollvl = await db.fetch(`rollevel_${message.guild.id}`)
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` <a:739589662120738836:739589662120738836> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  if(!hm) return message.channel.send('<a:739589662120738836:739589662120738836> Seviye sistemi zaten aktif hale getirilmemiş!\n Bunu mu arıyorsun? `t!seviye-aç`')
  
  message.reply('<a:739589662120738836:739589662120738836> Seviye sistemi devre dışı durumuna getiriliyor..').then(x => {
    
 db.delete(`seviyeacik_${message.guild.id}`)   
 db.delete(`svlog_${message.guild.id}`)
  db.delete(`verilecekxp_${message.guild.id}`)
  db.delete(`svrol_${message.guild.id}`)
  db.delete(`rollevel_${message.guild.id}`)    
  
  x.edit('<a:739589662120738836:739589662120738836> Sistem devre dışı bırakıldı! Tekrar açmak için **t!seviye-aç**')  
    
  }, 5000)
  
  

  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'seviye-kapat',
  description: 'taslak', 
  usage: 'seviye-kapat'
};