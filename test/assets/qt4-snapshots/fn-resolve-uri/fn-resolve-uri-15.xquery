fn:string(
  fn:resolve-uri(
    "examples",
    fn:substring-after("123http://www.example.com/", "123")
  )
)
