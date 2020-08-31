const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`<a:737724884104511499:737724884104511499> **Bu komudu kullanabilmek için "Sunucuyu Yönet" yetkisine sahip olman gerek.**`)
  if (!args[0]) return message.channel.send(`<a:737724884104511499:737724884104511499> **Küfür-Engel Filtresini Ayarlamak İçin \`t!küfür-engel aç\` | Kapatmak İstiyorsanız \`t!küfür-engel kapat\` Yazabilirsiniz**`)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(`<a:739589662120738836:739589662120738836> Küfür Filtresini Ayarlamak İçin \`t!küfür aç\` | Kapatmak İstiyorsanız \`t!küfür kapat\` Yazabilirsiniz`)

    if (args[0] == 'aç') {
    db.set(`küfürFiltre_${message.guild.id}`, 'acik')
    let i = await db.fetch(`küfürFiltre_${message.guild.id}`)
  message.channel.send(`<a:737724884104511499:737724884104511499> **Küfür Filtresi başarıyla ayarlandı.**`)    
     
  } 

  if (args[0] == 'kapat') {
    
    let üye = await db.fetch(`küfürFiltre_${message.guild.id}`)
    if (!üye) return message.channel.send(`<a:737724884104511499:737724884104511499> **Küfür filtresini açtığına emin misin?.**`)
    
    
    db.delete(`küfürFiltre_${message.guild.id}`)
    
    message.channel.send(`**:<a:737724884104511499:737724884104511499> Küfür Filtresini Kapattım.**`)
  }
 
};


exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['küfür', 'küfür-filtresi', 'küfürfiltresi', 'küfür-filtre', 'küfürfiltre'],
 permLevel: 0
};

exports.help = {
 name: 'küfür-engel',
 description: 'küfür',
 usage: 'gkanal'
};
//Lord Creative