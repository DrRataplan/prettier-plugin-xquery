fn:local-name-from-QName(
  fn:QName(
    "http://www.example.com/QNameXSD",
    exactly-one(xs:string((/root/elemQN)[1]))
  )
)
