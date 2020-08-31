const Discord = require('discord.js');
exports.run = (client, message) => {
      const random = Math.floor(Math.random() * 100) + 1
      message.channel.send(`Efkarınız %${random} <a:737724956976087171:737724956976087171> `)
   } 
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
}
exports.help = {
 name: 'efkar',
 description: 'EfkarÄ±nÄ±zÄ± Ã–lÃ§er ',
 usage: 'efkarÃ¶lÃ§er'
};