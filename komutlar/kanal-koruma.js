const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || '!'
 

  if (!args[0]) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTitle("Kanal Koruma sistemi!")
      .setDescription(
        "Hatalı kullanım <a:737724884104511499:737724884104511499> örnek: t!kanal-koruma aç & kapat"
      );

    message.channel.send(embed);
    return;
  }
  let kanal = await db.fetch(`kanalk_${message.guild.id}`)
  if (args[0] == "aç") {
    if (kanal) {
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setTitle("kanal Koruma sistemi!")
        .setDescription("Görünüşe göre kanal koruma zaten aktif <a:737725495181049936:737725495181049936>");

      message.channel.send(embed);
      return;
    } else {
      db.set(`kanalk_${message.guild.id}`, "acik");
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setTitle("Kanal Koruma Sistemi!")
        .setDescription("<a:738035555966779513:738035555966779513> Kanal koruma başarıyla açıldı!");

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`kanalk_${message.guild.id}`);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTitle("Kanal Koruma Sistemi!")
      .setDescription("<a:738035555966779513:738035555966779513> Kanal Koruma başarıyla kapandı!");

    message.channel.send(embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kanal-k"],
  permLevel: 2,
  kategori: "sunucu"
};

exports.help = {
  name: "kanal-koruma",
  description: "kanal koruma",
  usage: "kanal-koruma"
};