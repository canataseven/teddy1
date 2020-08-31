const Discord = require('discord.js');
const weather = require('weather-js');

exports.run = (client, message, args) => {
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.sendEmbed(new Discord.RichEmbed().setDescription('<a:737725176212619376:737725176212619376> Lütfen bir yer gir.').setColor('RANDOM'));
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`${current.observationpoint} için hava durumu`)
          .setThumbnail(current.imageUrl)
          .setColor(0x00AE86)
          .addField('<a:737725176212619376:737725176212619376> Zaman Dilimi',`UTC${location.timezone}`, true)
          .addField('<a:737725176212619376:737725176212619376> Derece Türü',location.degreetype, true)
          .addField('<a:737725176212619376:737725176212619376> Sıcaklık',`${current.temperature} Derece`, true)
          .addField('<a:737725176212619376:737725176212619376> Hava', `${current.feelslike}`, true)
          .addField('<a:737725176212619376:737725176212619376> Rüzgar',current.winddisplay, true)
          .addField('<a:737725176212619376:737725176212619376> Nem', `${current.humidity}%`, true)
          message.channel.send({embed});
  })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['YEDEK KOMUT1', 'YEDEK KOMUT2'],
  permLevel: "0"
};

exports.help = {
  name: "havadurumu",
  description: "hava durumunu gösterir",
  usage: "havadurumu"
};