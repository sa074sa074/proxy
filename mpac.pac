function FindProxyForURL(url, host) {
    var proxiedDomains = [
        "*.youtube.com", "*.googlevideo.com", "*.ytimg.com",
        "*.4pda.ru", "2ip.ru"
    ];
    for (var i = 0; i < proxiedDomains.length; i++) {
        if (shExpMatch(host, proxiedDomains[i])) {
            return "PROXY 161.0.0.206:20000; PROXY 172.252.57.114:20000; DIRECT";
        }
    }
    return "DIRECT";
}
