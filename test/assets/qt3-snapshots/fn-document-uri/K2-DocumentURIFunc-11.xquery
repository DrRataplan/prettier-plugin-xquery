for $i in (1, document-uri(.), 3)
return typeswitch ($i)
    case xs:anyURI return
      "xs:anyURI"
    case xs:integer return
      "int"

    default return
      "FAILURE"
