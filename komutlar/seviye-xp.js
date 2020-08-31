const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:739589662120738836:739589662120738836> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
   let kanal = await db.fetch(`svlog_${message.guild.id}`)
  let xp = await db.fetch(`verilecekxp_${message.guild.id}`)
  let hm = await db.fetch(`seviyeacik_${message.guild.id}`)
  let seviyerol = await db.fetch(`svrol_${message.guild.id}`)
  let rollvl = await db.fetch(`rollevel_${message.guild.id}`)
  
  if(!hm) return message.reply('Bu tuhaf! aktif edilmeyen bir seviye sistemine xp değeri eklemeyi düşünmedin umarım? \n Bunu Deniyebilirsin: `$seviye-aç`')
  
  let değer = args[0]
  if(!değer) return message.reply('<a:739589662120738836:739589662120738836> Belirlenecek xp değerini belirlemelisin.')
  if(isNaN(args[0])) return message.channel.send('<a:739589662120738836:739589662120738836> Xp değerini bir sayı biçiminde girmelisin.')
  if(değer > 10) return message.reply('<a:739589662120738836:739589662120738836> Xp değeri `10` den fazla olması,bot sistemine zarar olarak nitelendirilir.')
  

  
  let kontrol;
  if(kanal == null) kontrol = '<a:739589662120738836:739589662120738836> Sunucuda Ayarlanmış Bir Logs Bulunamadı!'
  else kontrol = kanal

    let kontrol3;
  if(seviyerol == null) kontrol3 = '<a:739589662120738836:739589662120738836> Seviye Rol Sistemi Aktif Değil!'
  else kontrol3 = seviyerol
  
  let selin = new Discord.RichEmbed()
  .setTitle('<a:739589662120738836:739589662120738836> İşlem Başarılı!')
  .setDescription('<a:739589662120738836:739589662120738836> Mesaj başına verilecek olan xp değeri (**'+değer+'**) Olarak ayarlandı!')
  .addBlankField()
  .addField('<a:739589662120738836:739589662120738836> Seviye Log Kanalı:', kontrol, true)
  .addField('<a:739589662120738836:739589662120738836> Mesaj Başı Verilecek XP:', değer, true)
  .addField('<a:739589662120738836:739589662120738836> Seviye Rol:', kontrol3)
  .setFooter('Teddy Bot Seviye Sistemi!')
  .setColor('RANDOM')
  message.channel.send(selin)
  
  db.set(`verilecekxp_${message.guild.id}`, değer)
  message.guild.owner.send('Seviye sistemi **'+message.member.user.username+'** ('+message.member.id+') tarafından mesaj başına verilecek xp **'+değer+'** olarak ayarlandı!\n `Teddy Bot Seviye Sistemi`')


  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'seviye-xp',
  description: 'taslak', 
  usage: 'seviye-xp'
};