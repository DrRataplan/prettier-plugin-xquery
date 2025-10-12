resolve-uri(
  codepoints-to-string(231) || ".html",
  "http://www.example.com/" || codepoints-to-string(224) || ".html"
) =
  ("http://www.example.com/" || codepoints-to-string(231) || ".html")
