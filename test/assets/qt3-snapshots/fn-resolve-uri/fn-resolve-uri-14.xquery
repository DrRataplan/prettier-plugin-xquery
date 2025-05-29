fn:string(
  fn:resolve-uri(
    "examples",
    fn:substring-before("http://www.example.com/123", "123")
  )
)
