exports.run = async (client, msg, args) => {
    let ask=[
      "Aşkölçer %3 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %6 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %9 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %12 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %18 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %20 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %23 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %26 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %29 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %30 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %40 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %50 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %60 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %70 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %73 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %76 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %79 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %82 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %85 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %88 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %90 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %91 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %92 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %93 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %94 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %95 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %96 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %97 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %98 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %99 Gösteriyor <a:737725023439159367:737725023439159367>",
      "Aşkölçer %100 Gösteriyor <a:737725023439159367:737725023439159367>",
    ]
      let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: ('<a:737724884104511499:737724884104511499> Kimi Sevdiğini etiketlemelisin..')
  }});
 
 
 
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${member} ${ask[Math.floor(Math.random() * 30)]}.`)
    }})
    }
 
 
  }
 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
 
  exports.help = {
    name: 'aşkölçer',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşkölçer'
   }