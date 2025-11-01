let $amp := codepoints-to-string(38)
return fn:parse-uri(
    "https://example.com:8080/path?s=%22hello world%22" ||
      $amp ||
      "sort=relevance"
  )
