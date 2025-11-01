let $amp := codepoints-to-string(38)
return fn:build-uri(
    map {
      "scheme": "https",
      "host": "example.com",
      "path-segments": ("", "path to", "a/b", "file"),
      "query-parameters":
        map {"ke=y1": "val" || $amp || "ue1", "ke?y2": "val'ue2"}
    },
    map {}
  )
