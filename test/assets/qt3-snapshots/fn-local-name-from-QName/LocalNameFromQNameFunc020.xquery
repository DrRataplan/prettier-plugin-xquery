fn:local-name-from-QName(
  if (false()) then
    fn:QName(
      "http://www.example.com/QNameXSD",
      exactly-one(xs:string((/root/elemQN)[1]))
    )
  else
    fn:QName(
      "http://www.example.com/QNameXSD",
      exactly-one(xs:string((/root/@attrQN)[1]))
    )
)
