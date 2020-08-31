const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:739589662120738836:739589662120738836> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let rol = message.mentions.roles.first()
  let seviye = args[1]
  
     let kanal = await db.fetch(`svlog_${message.guild.id}`)
  let xp = await db.fetch(`verilecekxp_${message.guild.id}`)
  let hm = await db.fetch(`seviyeacik_${message.guild.id}`)
    if(!hm) return message.reply('Bu tuhaf! aktif edilmeyen bir seviye sistemine xp değeri eklemeyi düşünmedin umarım? \n Bunu Deniyebilirsin: `t!seviye-aç`')
  if(!rol) return message.channel.send('<a:739589662120738836:739589662120738836> Ayarlayabilmem için bir rol belirtmelisin. \n Örnek: `t!seviye-rol @verilicekrol 10`')
  if(!seviye) return message.channel.send('<a:739589662120738836:739589662120738836> Ayarlayabilmem için bir seviye belirtmelisin. \n Örnek: `t!seviye-rol @verilicekrol 10`')
  if(isNaN(args[1])) return message.channel.send('<a:739589662120738836:739589662120738836> Seviye değerini bir sayı biçiminde girmelisin.')
  if(seviye > 50) return message.channel.send('<a:739589662120738836:739589662120738836> Max `50` olarak ayarlanabilir.!')
  
    let kontrol;
  if(kanal == null) kontrol = 'Sunucuda Ayarlanmış Bir Logs Bulunamadı!'
  else kontrol = kanal
  
  let kontrol2;
  if(xp == null) kontrol2 = '4'
  else kontrol2 = xp
  
  let codeming = new Discord.RichEmbed()
  .setTitle('Başarılı Ayarlandı!')
  .setDescription('Seviye rol ödülü başarıyla ayarlandı.')
    .addBlankField()
  .addField('<a:739589662120738836:739589662120738836> Seviye Log Kanalı:', kontrol, true)
  .addField('<a:739589662120738836:739589662120738836> Mesaj Başı Verilecek XP:', kontrol2, true)
  .addField('<a:739589662120738836:739589662120738836> Verilecek Rol:', rol, true)
  .addField('<a:739589662120738836:739589662120738836> Rolün Verileceği Seviye:', seviye)
  .setFooter('Teddy Bot Seviye Sistemi!')
  .setColor('RANDOM')
  message.channel.send(codeming)
  db.set(`svrol_${message.guild.id}`, rol.id)
  db.set(`rollevel_${message.guild.id}`, seviye)
  
//Zepoo 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'seviye-rol',
  description: 'taslak', 
  usage: 'seviye-rol'
};