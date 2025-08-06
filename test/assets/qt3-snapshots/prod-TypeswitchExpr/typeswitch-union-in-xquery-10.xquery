for $x in (<e />, 1, "x")
return typeswitch ($x)
  case $i as xs:integer|xs:boolean|element() return
    1

  default return
    0
