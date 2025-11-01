fn:build-uri(
  map {
    "scheme": "https",
    "host": "example.com",
    "path-segments": ("", "path", "to", "file"),
    "query-parameters": map {"key1": "value1", "key2": "", "": "value3"}
  },
  map {}
)
