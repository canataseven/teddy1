const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const mesaj = args.slice(0).join(' ');
    if(!message.member.roles.has("741794820447666196")) return message.channel.send(`**<a:739589662120738836:739589662120738836> Bu komutu kullanabilmek için @STЄOD ™ #BЯUNEI yetkisine sahip olmasınız.**`);
    if(mesaj.length < 1) return message.channel.send(new Discord.RichEmbed().setDescription(`<a:737724884104511499:737724884104511499> Herkese mesaj göndere bilmem için önce mesajını yazman lazım.`).setColor('BLACK'));
      try {
        message.guild.members.forEach(member=> {
        member.send(mesaj)        
          }) 
        message.channel.send(new Discord.RichEmbed().setDescription(` <a:737724884104511499:737724884104511499> Mesaj başarıyla **` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** Kullanıcıya Gönderildi.`).setColor('RANDOM'));
          }
        catch(e) {
        return console.log(`Hata`)  
      }    
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'dmduyuru',
  description: 'DM Duyuru.',
  usage: 'duyuru'
};