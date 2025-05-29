fn:namespace-uri-from-QName(
  fn:QName(
    "http://www.example.com/urn",
    exactly-one(xs:string((/root/elemQN)[1]))
  )
)
