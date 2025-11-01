fn:build-uri(
  map {
    "uri": "https://user:password@example.com:443/path",
    "scheme": "https",
    "authority": "user:password@example.com:443",
    "host": "example.com",
    "port": 443,
    "path-segments": ("", "path"),
    "path": "/path"
  }
)
