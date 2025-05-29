(
  resolve-uri("prod", "http://datypic.com/"),
  resolve-uri("prod2", "http://datypic.com/prod1"),
  resolve-uri("http://example.org", "http://datypic.com"),
  resolve-uri("http://datypic.com", "../base"),
  resolve-uri("", "http://datypic.com")
)
