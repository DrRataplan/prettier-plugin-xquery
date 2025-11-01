let $amp := codepoints-to-string(38)
return fn:build-uri(
    map {
      "uri":
        "https://example.com:8080/path?s=%22hello world%22" ||
          $amp ||
          "sort=relevance",
      "scheme": "https",
      "authority": "example.com:8080",
      "host": "example.com",
      "port": 8080,
      "path": "/path",
      "query": "s=%22hello world%22" || $amp || ";sort=relevance",
      "query-parameters": map {"s": '"hello world"', "sort": "relevance"},
      "path-segments": ("", "path")
    }
  )
