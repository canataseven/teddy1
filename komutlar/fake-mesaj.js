const Discord = require('discord.js');

exports.run = function (client, message, args) {
    let kişi = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply(' <a:737725495181049936:737725495181049936> Lütfen Birisini Etiketle')
    let yazi = args[1]
    if (!yazi) return message.reply('<a:737725495181049936:737725495181049936> Lütfen Yazini Yaz')
    message.delete()
    message.channel.createWebhook(kişi.username, kişi.avatarURL)
    .then(webhook => webhook.edit(kişi.username, kişi.avatarURL)
        .then(wb => {
            const hook = new Discord.WebhookClient(wb.id, wb.token);
            hook.send(yazi)
            hook.delete()
        })
        .catch(console.error))
        .catch(console.error);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 3
};

exports.help = {
    name: 'fakemesaj',
    description: 'fakemesaj',
    usage: 'fakemesaj'
};