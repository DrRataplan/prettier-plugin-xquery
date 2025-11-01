fn:build-uri(
  map {
    "scheme": "https",
    "uri": "https://user:password@example.com:443/path/a%2fb/a+b",
    "authority": "user:password@example.com:443",
    "port": 443,
    "host": "example.com",
    "path-segments": ("", "path", "a/b", "a b"),
    "path": "/path/a%2fb/a+b"
  }
)
