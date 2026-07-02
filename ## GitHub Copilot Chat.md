## GitHub Copilot Chat

- Extension: 0.45.1 (prod)
- VS Code: 1.117.0 (10c8e557c8b9f9ed0a87f61f1c9a44bde731c409)
- OS: win32 10.0.26200 x64
- GitHub Account: shahbanabdulov-sys

## Network

User Settings:
```json
  "http.systemCertificatesNode": true,
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 140.82.121.6 (134 ms)
- DNS ipv6 Lookup: Error (213 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: http://127.0.0.1:10809 (1 ms)
- Proxy Connection: 200 Connection established (5 ms)
- Electron fetch (configured): HTTP 200 (186 ms)
- Node.js https: HTTP 200 (628 ms)
- Node.js fetch: HTTP 200 (156 ms)

Connecting to https://api.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.114.21 (209 ms)
- DNS ipv6 Lookup: Error (5 ms): getaddrinfo ENOTFOUND api.githubcopilot.com
- Proxy URL: http://127.0.0.1:10809 (26 ms)
- Proxy Connection: 200 Connection established (2 ms)
- Electron fetch (configured): HTTP 200 (203 ms)
- Node.js https: HTTP 200 (1004 ms)
- Node.js fetch: HTTP 200 (944 ms)

Connecting to https://copilot-proxy.githubusercontent.com/_ping:
- DNS ipv4 Lookup: 20.199.39.224 (150 ms)
- DNS ipv6 Lookup: Error (4 ms): getaddrinfo ENOTFOUND copilot-proxy.githubusercontent.com
- Proxy URL: http://127.0.0.1:10809 (17 ms)
- Proxy Connection: 200 Connection established (2 ms)
- Electron fetch (configured): HTTP 200 (743 ms)
- Node.js https: HTTP 200 (631 ms)
- Node.js fetch: HTTP 200 (591 ms)

Connecting to https://mobile.events.data.microsoft.com: HTTP 404 (4488 ms)
Connecting to https://dc.services.visualstudio.com: HTTP 404 (760 ms)
Connecting to https://copilot-telemetry.githubusercontent.com/_ping: 