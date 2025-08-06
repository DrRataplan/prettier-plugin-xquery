for $i in (1, base-uri(.), 3)
return typeswitch ($i)
  case xs:anyURI return
    "xs:anyURI"
  case xs:integer return
    "xs:integer"

  default return
    "FAILURE"
