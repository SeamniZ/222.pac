function FindProxyForURL(url, host) {
    // Прокси-сервер (укажи свой IP и порт)
    var proxy = "SOCKS5 94.159.102.215:2080";

    // Список доменов, идущих через прокси
    var proxyDomains = [
        ".youtube.com",
        ".ytimg.com",
        ".x.com",
        ".t.co",
        ".instagram.com",
        ".facebook.com",
        ".fbcdn.net",
        ".grok.com",
        ".chat.openai.com",
        ".openai.com",
        ".habr.com",
        ".4pda.to",
        ".4pda.ru"
		".2ip.ru"
    ];

    for (var i = 0; i < proxyDomains.length; i++) {
        if (dnsDomainIs(host, proxyDomains[i])) {
            return proxy;
        }
    }

    // Всё остальное — напрямую
    return "DIRECT";
}
