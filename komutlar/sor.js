const Discord = require('discord.js');

const cevaplar = [                  '<a:739589662120738836:739589662120738836> Bu kesin.',
                                    '<a:739589662120738836:739589662120738836> Kesinlikle öyle.',
                                    '<a:739589662120738836:739589662120738836> Kuşkusuz.',
                                    '<a:739589662120738836:739589662120738836> Evet, Kesinlikle.',
                                    '<a:739589662120738836:739589662120738836> Buna güvenebilirsin.',
                                    '<a:739589662120738836:739589662120738836> Gördüğüm kadarıyla, Evet.',
                                    '<a:739589662120738836:739589662120738836> Büyük olasılıkla.',
                                    '<a:739589662120738836:739589662120738836> Görünüşe göre, iyi.',
                                    '<a:739589662120738836:739589662120738836> Evet.',
                                    '<a:739589662120738836:739589662120738836> İşaretler eveti gösteriyor.',
                                    '<a:739589662120738836:739589662120738836> Anlayamadım, tekrar edin.',
                                    '<a:739589662120738836:739589662120738836> Daha sonra sor.',
                                    '<a:739589662120738836:739589662120738836> Şimdi söylemesen iyi olur.',
                                    '<a:739589662120738836:739589662120738836> Tahmin edemiyorum...',
                                    '<a:739589662120738836:739589662120738836> Konsantre ol ve tekrar sor.',
                                    '<a:739589662120738836:739589662120738836> Buna güvenme.',
                                    '<a:739589662120738836:739589662120738836> Cevabım, hayır.',
                                    '<a:739589662120738836:739589662120738836> Kaynaklarım hayır diyor.',
                                    '<a:739589662120738836:739589662120738836> Görünüşe göre, bu iyi değil.',
                                    '<a:739589662120738836:739589662120738836> Çok şüpheli.',
                                    '<a:739589662120738836:739589662120738836> Şüpheli.',
                                    '<a:739589662120738836:739589662120738836> Büyük olasılıkla, hayır.',
                                    '<a:739589662120738836:739589662120738836> İçgüdüm, hayır diyor.',
                                    '<a:739589662120738836:739589662120738836> Kararsız kaldım, bidaha sormaya ne dersin?'                         
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('<a:738028327045955665:738028327045955665> Bana bir soru sormalısın! **Örnek**: t!sor <soru>')
    else message.channel.send(cevap)

}; 

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sor',
  description: 'güncel sor',
  usage: 'sor <soru>'
};