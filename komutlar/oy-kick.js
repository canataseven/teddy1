const Discord  = module.require('discord.js');

const agree    = "✅";
const disagree = "❎";

module.exports.run = async (bot, message, args) => {

  if (message.mentions.users.size === 0){
    return message.channel.send("<a:737724884104511499:737724884104511499> ** Lütfen Birini Etiketleyiniz!**");
  }

  let kickmember = message.guild.member(message.mentions.users.first());
  if(!kickmember){
    message.channel.send("<a:737724884104511499:737724884104511499> ** Bu Kullanıcı Geçerli Görmüyor!**");
  }

  if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
    return message.channel.send("<a:737724884104511499:737724884104511499> ** Bu Komutu Kullanmak İçin** \`Üyeleri At\` **İznine Sahip Olmalısın!** ").catch(console.error);
  }

  let msg = await message.channel.send("<a:737724884104511499:737724884104511499> ** Bu Kullanıcıyı Sunucudan Atmak İçin Şimdi Oyla (**\`10\`**) Saniyeniz Var!**");
  await msg.react(agree);
  await msg.react(disagree);

  const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 10000});
  msg.delete();

  var NO_Count = reactions.get(disagree).count;
  var YES_Count = reactions.get(agree);

  if(YES_Count == undefined){
    var YES_Count = 1;
  }else{
    var YES_Count = reactions.get(agree).count;
  }

  var sumsum = new Discord.RichEmbed()
  
            .addField("**Oylama Tamamlandı!**", "═════════════════════════\n" +
                                          "<a:737724884104511499:737724884104511499> ** Toplam Oy (**\`Evet\`**)** ➠ " + `${YES_Count-1}\n` +
                                          "<a:737724884104511499:737724884104511499> ** Toplam Oy (**\`Hayır\`**)** ➠ " + `${NO_Count-1}\n` +
                                          "═════════════════════════\n" +
                                          "**NOT: Sunucudan Atmak İçin Gerekli Oylar (**\`+3\`**)**\n" +
                                          "═════════════════════════", true)

            .setColor("0x#FF0000")

  await message.channel.send({embed: sumsum});

  if(YES_Count >= 4 && YES_Count > NO_Count){

    kickmember.kick().then(member => {
      message.reply(`<a:737724884104511499:737724884104511499> **|** ${member.user.username} **Adlı Kullanıcı Başarıyla Oy Kick Sistemi İle Sunucudan Atıldı**`)
    })
  }else{

  }

  message.channel.send("\n" + "<a:737724927591055411:737724927591055411> ** Şimdilik Güvende!**");
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oyla'],
  permLevel: 0
};

exports.help = {
  name: 'oyla',
  description: 'Sunucuda Oy Kick Sistemi İle Birini Sunucudan Atmaya İşe Yarar.',
  usage: 'oy-kick'
};