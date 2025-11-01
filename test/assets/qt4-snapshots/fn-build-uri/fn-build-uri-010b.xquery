fn:build-uri(
  map {
    "scheme": "http",
    "hierarchical": true(),
    "authority": "example.com",
    "host": "example.com",
    "path-segments": ("", "@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_"),
    "query-parameters":
      map {"a": ("@ABCDEFGHIJKLMN"), "b": ("OPQRSTUVWXYZ[\]^_")},
    "fragment": "@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_"
  }
)
