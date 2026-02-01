function FindProxyForURL(url, host) {
    // Оптимизированный список: wildcard для сабдоменов, без дублей
    var proxiedDomains = [
        // YouTube/Google
        "*.youtube.com",
        "*.googlevideo.com",
        "*.ytimg.com",
        "ggpht.com",
        
        // Форумы/Торренты
        "*.4pda.ru",
        "2ip.ru",
        "nnmclub.to",
        "*.rutracker.*",
        "t-ru.org",
        "rutrk.org",
        "rutracker.wiki",
        "kinozal.tv",
        "lostfilm.tv",
        "rutor.org",
        
        // Speedtest
        "*.speedtest.co",
        "*.speedtest.net",
        
        // Соцсети: Instagram/Facebook
        "*.instagram.com",
        "ig.me",
        "*.facebook.com",
        "*.fbcdn.net",
        "*.fbsbx.com",
        "facebook.net",
        
        // Twitter/X
        "*.twitter.com",
        "*.x.com",
        "t.co",
        "twimg.com",
        "tweetdeck.com",
        
        // WhatsApp/Viber
        "*.whatsapp.com",
        "*.whatsapp.net",
        "*.viber.com",
        
        // Telegram/Discord
        "*.telegram.org",
        "*.t.me",
        "*.discord.com",
        "*.discord.gg",
        "*.discordapp.com",
        "*.discordapp.net",
        "*.discord.media",
        "discord.co",
        "cdn.discordapp.com",
        "media.discordapp.net",
        "gateway.discord.gg",
        
        // Другие (Dell, Intel, VMWare и т.д.)
        "*.dell.com",
        "*.dellcdn.com",
        "*.intel.com",
        "dsadata.intel.com",
        "redis.io",
        "*.veeam.com",
        "vagrantcloud.com",
        "*.vmware.com",
        "*.broadcom.com",
        "graylog.org",
        "resp.app",
        "collaboraonline.com",
        "iplist.opencck.org"
    ];

    // Проверка с shExpMatch (лучше dnsDomainIs для Android/мобильных)
    for (var i = 0; i < proxiedDomains.length; i++) {
        if (shExpMatch(host, proxiedDomains[i])) {
            // Полная цепочка резервных прокси из оригинала
            return (
                "PROXY 161.0.0.206:20000; " +
                "PROXY 172.252.57.114:20000; " +
                "PROXY 161.0.0.207:20000; " +
                "PROXY 188.42.15.245:20000; " +
                "PROXY 172.252.57.110:20000; " +
                "PROXY 172.252.57.111:20000; " +
                "PROXY 172.252.57.112:20000; " +
                "PROXY 172.252.57.113:20000; " +
                "DIRECT"
            );
        }
    }

    // Остальное напрямую
    return "DIRECT";
}
