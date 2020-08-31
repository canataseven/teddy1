client.on('roleDelete', async function(role) {
    const fetch = await role.guild.fetchAuditLogs({type: "ROLE_DELETE"}).then(log => log.entries.first())
    let yapan = fetch.executor;
    let rol = role.name;
    let renk = role.color;
    let ayrı = role.hoist;
    let sıra = role.position;
    let yetkiler = role.permissions;
    let etiketlenebilir = role.mentionable;
    role.guild.createRole({
      name:rol,
      color:renk,
      hoist:ayrı,
      position:sıra,
      permissions:yetkiler,
      mentionable:etiketlenebilir
    })
    let uyarı = new Discord.RichEmbed()
      .setTitle("Rol Silindi")
      .setColor("RANDOM")
      .setDescription(`\`${role.guild.name}\` adlı sunucunuzda ${rol} adına sahip rol, ${yapan} adlı kişi tarafından silindi. Ben rolü tekradan oluşturdum!`)
  })