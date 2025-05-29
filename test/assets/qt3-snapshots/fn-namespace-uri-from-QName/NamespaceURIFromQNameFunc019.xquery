fn:namespace-uri-from-QName(
  if (true()) then
    fn:QName(
      "http://www.example.com/urn",
      exactly-one(xs:string((/root/elemQN[1])))
    )
  else
    fn:QName(
      "http://www.example.com/urn",
      exactly-one(xs:string((/root/@attrQN))[1])
    )
)
