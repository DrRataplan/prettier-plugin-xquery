fn:namespace-uri-from-QName(
  fn:QName(
    "http://www.example.com/urn",
    exactly-one(xs:string(data((/root/elemQN))[1]))
  )
)
