fn:build-uri(
  map {
    "scheme": "http",
    "hierarchical": true(),
    "authority": "example.com",
    "host": "example.com",
    "path-segments": ("", "`abcdefghijklmnopqrstuvwxyz{|}~"),
    "query-parameters":
      map {"a": ("`abcdefghijklmn"), "b": ("opqrstuvwxyz{|}~")},
    "fragment": "`abcdefghijklmnopqrstuvwxyz{|}~"
  }
)
