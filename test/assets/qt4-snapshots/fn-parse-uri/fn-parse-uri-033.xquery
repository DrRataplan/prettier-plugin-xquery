fn:parse-uri(
  "https://user:password@example.com:443/path",
  map {"allow-deprecated-features": true(), "omit-default-ports": true()}
)
