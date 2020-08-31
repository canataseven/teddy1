const Discord = require('discord.js');
const db = require('quick.db');

const moment = require('moment');
require('moment-duration-format');
exports.run = async (client, message, args) => {
   var olcum = await message.channel.send( ' **Ölçüm yapılıyor, lütfen bekleyiniz...<a:737725176212619376:737725176212619376>**');
 var sonuc = await message.channel.send( " **Veriler alındı...<a:737725176212619376:737725176212619376>**").then(msg => msg.delete(3000))
     await olcum.edit( `<a:737725176212619376:737725176212619376> **Tepki Gecikmesi** \`${Math.round((sonuc.createdTimestamp - olcum.createdTimestamp - client.ping) )}\`**ms**\n <a:737725176212619376:737725176212619376> **Bot Gecikmesi** \`${Math.round(client.ping)}\`**ms**`);
///
  
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping was here',
  usage: ''
};
//Lord Creative