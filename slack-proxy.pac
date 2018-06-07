function FindProxyForURL(url, host) {

    if (shExpMatch(host, "*.slack-msgs.com")) {        
        // Use SOCK proxy, or fall back to a DIRECT traffic.
        // ssh -D 1337 [user]@[server]
        return "SOCKS 127.0.0.1:1337; DIRECT";
    }

    return "DIRECT";
}
