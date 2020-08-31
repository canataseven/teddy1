const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:738028327045955665:738028327045955665> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
   let kanal = await db.fetch(`svlog_${message.guild.id}`)
  let xp = await db.fetch(`verilecekxp_${message.guild.id}`)
  let hm = await db.fetch(`seviyeacik_${message.guild.id}`)
    let seviyerol = await db.fetch(`svrol_${message.guild.id}`)
  let rollvl = await db.fetch(`rollevel_${message.guild.id}`)
   if(!hm) return message.reply('Bu tuhaf! aktif edilmeyen bir seviye sistemine xp değeri eklemeyi düşünmedin umarım? \n Bunu Deniyebilirsin: `t!seviye-aç`')
  let kanals = message.mentions.channels.first()
  if(!kanals) return message.channel.send('<a:739589662120738836:739589662120738836> Kanal ayarlamam için bir kanal belirtmen gerekiyor. |n Örnek: `t!seviye-log #level-log`')
  
    let kontrol2;
  if(xp == null) kontrol2 = '4 (Varsayılan)'
  else kontrol2 = xp
  
    
  let kontrol3;
  if(seviyerol == null) kontrol3 = '<a:739589662120738836:739589662120738836> Seviye Rol Sistemi Aktif Değil!'
  else kontrol3 = seviyerol
  
  let codeming = new Discord.RichEmbed()
  .setTitle('İşlem Başarılı!')
  .setDescription('Seviye logs kanalı ayarlandı.Üyeler seviye atlayınca orda belirteceğim.')
  .addBlankField()
  .addField('<a:739589662120738836:739589662120738836> Seviye Log Kanalı:', kanals, true)
  .addField('<a:739589662120738836:739589662120738836> Mesaj Başı Verilecek XP:', kontrol2, true)
  .addField('<a:739589662120738836:739589662120738836> Seviye Rol:', kontrol3)
  .setFooter('Teddy Bot Seviye Sistemi!')
  .setColor('RANDOM')
  message.channel.send(codeming)
  
  message.guild.owner.send('<a:739589662120738836:739589662120738836> Seviye sistemi **'+message.member.user.username+'** ('+message.member.id+') tarafından logs kanalı **'+kanals+'** Olarak ayarlandı.!\n `Teddy Bot Seviye Sistemi`')
  db.set(`svlog_${message.guild.id}`, kanals)

  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'seviye-log',
  description: 'taslak', 
  usage: 'seviye-log'
};