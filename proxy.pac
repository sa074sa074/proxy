function FindProxyForURL(url, host) {

    // Домены, которые должны идти через прокси (YouTube, 4pda, 2ip.ru)
    var proxiedDomains = [
        "youtube.com",
        "www.youtube.com",
        "m.youtube.com",
        "music.youtube.com",
        "studio.youtube.com",
        "gaming.youtube.com",
        "tv.youtube.com",
        "kids.youtube.com",
        "live.youtube.com",
        "creator.youtube.com",
        "accounts.youtube.com",
        "i.ytimg.com",
        "ytimg.com",
        "googlevideo.com",
        "ggpht.com",
        "4pda.ru",
        "www.4pda.ru",
        "2ip.ru"
    ];

    // Проверяем, попадает ли хост в список проксируемых доменов
    for (var i = 0; i < proxiedDomains.length; i++) {
        if (dnsDomainIs(host, proxiedDomains[i])) {
            // Возвращаем цепочку прокси: главный → резервные → DIRECT
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

    // Все остальные домены — напрямую
    return "DIRECT";
}
