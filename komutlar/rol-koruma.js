const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
 

  if (!args[0]) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTitle("Rol Koruma sistemi!")
      .setDescription(
        "**Hatalı kullanım! örnek: t!rol-koruma aç && kapat**"
      );

    message.channel.send(embed);
    return;
  }
  let rol = await db.fetch(`rolk_${message.guild.id}`);
  if (args[0] == "aç") {
    if (rol) {
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setTitle("Rol Koruma sistemi!")
        .setDescription("**Görünüşe göre rol koruma zaten aktif <a:737725495181049936:737725495181049936> **");

      message.channel.send(embed);
      return;
    } else {
      db.set(`rolk_${message.guild.id}`, "acik");
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setTitle("Rol Koruma sistemi!")
        .setDescription("<a:738035555966779513:738035555966779513> **Rol koruma başarıyla açıldı!**");

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`rolk_${message.guild.id}`);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTitle("Rol Koruma sistemi!")
      .setDescription("<a:738035555966779513:738035555966779513> **Rol Koruma başarıyla kapandı!**");

    message.channel.send(embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rol-k"],
  permLevel: 2,
  kategori: "sunucu"
};

exports.help = {
  name: "rol-koruma",
  description: "Rol koruma",
  usage: "rol-koruma"
};