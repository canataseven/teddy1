const Discord = require("discord.js");
exports.run = function(client, message, args) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(`Ne yazıkki bu komutu kullanmaya yetkiniz yok!`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return;
  }
  if (!args[0]) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(`<a:739589662120738836:739589662120738836> Lütfen silinecek mesaj sayısını belirtiniz.`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return;
  }
  if (args[0] > 100) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(`Ne yazık ki 100'den fazla mesaj silemem.`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return;
  }
  message.channel.bulkDelete(args[0]).then(() => {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setThumbnail(client.user.avatarURL)
      .addField(`<a:739589662120738836:739589662120738836> Temizleyen Yetkili`, `<@${message.author.id}>`)
      .addField(`<a:739589662120738836:739589662120738836> Silinen Mesaj Sayısı`, args[0])

    message.channel.send(embed).then(msg => msg.delete(5000));
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sil"],
  permLevel: 0
};

exports.help = {
  name: "temizle",
  description: "temizle",
  usage: "temizle"
};
//Lord Creative